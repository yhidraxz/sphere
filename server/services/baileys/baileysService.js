// import makeWASocket, {
//   useMultiFileAuthState,
//   makeInMemoryStore,
// } from "baileys";
import { deleteChat } from "./baileysUtils.js";
import { awaitingReplyService } from "../../utils/awaitingReply.js";
import baileys from "@whiskeysockets/baileys";

const {
  makeWASocket,
  useMultiFileAuthState,
  makeInMemoryStore,
  DisconnectReason,
} = baileys;

const { state, saveCreds } = await useMultiFileAuthState("baileys_auth_info");

const store = makeInMemoryStore({});

store.readFromFile("./baileys_store.json");

setInterval(() => {
  store.writeToFile("./baileys_store.json");
}, 10000);
export function startBaileys() {
  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    syncFullHistory: false,
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;

    // if (qr) {
    //   // optional — you can skip this if you're not using a frontend
    //   axios.post('http://localhost:5000/api/update-qr', { qr }).catch(() => {});
    // }

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !==
        DisconnectReason.loggedOut;

      console.log(
        "connection closed due to",
        lastDisconnect?.error,
        "reconnecting",
        shouldReconnect
      );

      if (shouldReconnect) {
        startBaileys(); // 🔁 re-run the whole thing
      }
    } else if (connection === "open") {
      console.log("✅ WhatsApp connected!");
    }
  });

  store.bind(sock.ev);

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    const msg = messages[0];

    if (!msg.message || msg.key.fromMe) return; // ⬅️ add this check

    if (msg.key.fromMe && !msg.message) return;

    const senderJid = msg.key.remoteJid;

    if (awaitingReplyService.exists(senderJid)) {
      const userMessage = extractTextFromMessage(msg);

      console.log("user said:", userMessage);

      awaitingReplyService.remove(senderJid);

      //   await deleteChat(sock, senderJid, msg);
    } else {
      console.log(
        "we got message from a user we werent waiting for, so fuck him"
      );
    }
  });

  function extractTextFromMessage(msg) {
    return msg.message?.conversation || msg.message?.extendedTextMessage?.text;
  }
}
