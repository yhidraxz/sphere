// import makeWASocket, {
//   useMultiFileAuthState,
//   makeInMemoryStore,
// } from "baileys";
import { awaitingReplyService } from "../../utils/awaitingReply.js";
import baileys from "@whiskeysockets/baileys";

const { makeWASocket, useMultiFileAuthState, makeInMemoryStore } = baileys;

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

  store.bind(sock.ev);

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    const msg = messages[0];

    if (msg.key.fromMe && !msg.message) return;

    const senderJid = msg.key.remoteJid;

    if (awaitingReplyService.exists(senderJid)) {
      const userMessage = extractTextFromMessage(msg);

      console.log("user said:", userMessage);

      awaitingReplyService.remove(senderJid);
    } else {
      console.log(
        "we got message from a user we werent waiting for, so fuck him"
      );
    }
  });

  function extractTextFromMessage(message) {
    return msg.message?.conversation || msg.message?.extendedTextMessage?.text;
  }
}
