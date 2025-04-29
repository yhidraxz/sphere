import { sendMsg } from "./sendMsg";

const startSendingMsg = async (req, res) => {
  let message = req.body.message;
  let contacts = req.body.contacts;

  await sendMsg();
};
