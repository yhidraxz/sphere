import { scrapeMaps } from "../../utils/googleScraper.js";
import { sendMsg } from "../../utils/sendMsg.js";
import { formatDuration } from "../../utils/formatDuration.js";
import campaigns from "../../db/schemas/campaigns.js";

const InitiateFlow = async (req, res) => {
  console.log("flow initiated");
  console.log(req.body);
  let queries = req.body.queries;
  let message = req.body.message;
  let userId = req.body.userId;

  console.log(userId)

  const startedAt = new Date();
  const campaign = await campaigns.create({user: userId, startedAt});

  //   let buzList = await scrapeMaps(queries);

  //   let contacts = getContacts(buzList);

  //   await sendMsg(contacts, message);

  await endCampaign(campaign._id, startedAt)

  res.send("all leads contacted");
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

async function endCampaign(campaignId, startedAt ) {
  const endedAt = new Date();
  const durationMs = endedAt - startedAt;

  const duration = formatDuration(durationMs);

  await campaigns.findByIdAndUpdate(campaignId, {
    createdAt,
    endedAt,
    duration,
    status: completed
  })
}


export { InitiateFlow };
