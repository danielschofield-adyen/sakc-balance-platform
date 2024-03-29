async function callTransferBalance(amountValue)
{
    const url = "../backend/transferBalance.php";
    const data = {
    "amount": {
        "currency": "SGD",
        "value": amountValue*100
    },
    // "balanceAccountId": "BA32272223222C5GWSL23DN8Z",
    "category" : "internal",
    "counterparty": {
        "balanceAccountId": ""
    },
    "description": "Transfer using wallet on FoodPanda",
    "reference": orderRef
};

    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url,data);

    //do logic with response
    // displayResponse(response);
    console.log(response.status)
    console.log(response.reason)

    document.getElementById("transferResponse").innerHTML = '<br><p>Status: ' + response.status + '<br>Reason: ' + response.reason + '</p>';

    callDashboardWidgets();
    updateCost();
}
