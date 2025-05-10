import { scrapeMaps } from "../../services/operations/googleScraper.js";
import { sendMsg } from "../../services/operations/sendMsg.js";
import { formatDuration } from "../../utils/formatDuration.js";
import { createCampaign } from "../../api/campaign.js";

const InitiateFlow = async (req, res) => {
  let queries = req.body.queries;
  let message = req.body.message;
  let userId = req.body.userId;


  const startedAt = new Date();

  //   let buzList = await scrapeMaps(queries);

  //   let contacts = getContacts(buzList);

  //   await sendMsg(contacts, message);

  const {endedAt, duration} = await endCampaign(startedAt)

  res.send("all leads contacted");

  const campaign = {
    userId,
    startedAt,
    endedAt,
    duration,
    status: "completed"
  }
  console.log(`campaign created: ${campaign}`)
  createCampaign(campaign);
};

function getContacts(buzList) {
  let contacts = [];

  for (business of buzList) {
    for (contact of business) {
      contacts.push(contact.numero);
    }
  }
  return contacts;
}

async function endCampaign(startedAt) {
  const endedAt = new Date();
  const durationMs = endedAt - startedAt;

  const duration = formatDuration(durationMs);

  return {endedAt, duration}

}


export { InitiateFlow };
