async function callTransferBalance()
{
    const url = "backend/transferBalance.php";
    const data = {
    "amount": {
        "currency": "SGD",
        "value": 100
    },
    "balanceAccountId": "BA3227C223222C5GWT74G8QNT",
    "category" : "internal",
    "counterparty": {
        "balanceAccountId": "BA3227C223222B5GGM9W8DJZH"
    },
    "description": "Using wallet foodPanda",
    "reference": "23456"
};

    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url,data);

    //do logic with response
  console.log(response);
}
