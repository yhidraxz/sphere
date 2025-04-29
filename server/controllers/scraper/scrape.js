import { scrapeMaps } from "../../utils/googleScraper.js";
import { getContacts } from "../../utils/getContacts.js";
import { sendMsg } from "../../utils/sendMsg.js";

const ScrapeSend = async (req, res) => {
  let queries = req.body.queries;
  let message = req.body.message;

  let buzList = await scrapeMaps(queries);

  let contacts = getContacts(buzList);

  await sendMsg(contacts, message);
  res.send("all leads contacted");
};

export { ScrapeSend };
