import { scrapeMaps } from "../../utils/googleScraper.js";
import { getContacts } from "../../utils/getContacts.js";
import { sendMsg } from "../../utils/sendMsg.js";

const InitiateFlow = async (req, res) => {
  console.log("flow initiated");
  console.log(req.body);
  let queries = req.body.queries;
  let message = req.body.message;

  console.log(queries);
  console.log(message);

  //   let buzList = await scrapeMaps(queries);

  //   let contacts = getContacts(buzList);

  //   await sendMsg(contacts, message);
  res.send("all leads contacted");
};

export { InitiateFlow };
