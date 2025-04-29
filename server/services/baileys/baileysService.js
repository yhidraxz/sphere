import makeWASocket, {
  useMultiFileAuthState,
  makeInMemoryStore,
} from "baileys";
import { awaitingReplyService } from "../../utils/awaitingReply.js";

const { state, saveCreds } = useMultiFileAuthState("baileys_auth_info");

const store = makeInMemoryStore({});

store.readFromFile("./baileys_store.json");

setInterval(() => {
  store.writeToFile("./baileys_store.json");
}, 10000);

const sock = makeWASocket({
  printQRInTerminal: true,
  auth: state,
  syncFullHistory: false,
});

sock.ev.on("creds.update", saveCreds);

store.bind(sock.ev);

sock.ev.on("chats.upsert", () => {
  console.log("got chats", store.chats.all());
});

sock.ev.on("contacts.upsert", () => {
  console.log("got contacts", Object.values(store.contacts));
});
