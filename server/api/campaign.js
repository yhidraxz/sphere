export async function createCampaign(campaign) {
    fetch("http://localhost:5081/campaigns", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },  
        body: JSON.stringify({campaign})
    }).then((res) => {
        res.json; 
        console.log('sending api to cloud')
})
}