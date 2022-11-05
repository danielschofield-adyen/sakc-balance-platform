async function callCreateAccountHolder(id)
{
    const url = "backend/createAccountHolder.php";
    const data = {
      "reference": "TEST_FP",
      "description":"Test Account holder",
      "legalEntityId":id,
      "capabilities" : {
          "receiveFromPlatformPayments" : {
          "enabled" : false
        },
        "receiveFromBalanceAccount":{
          "enabled" : false
        },
        "sendToBalanceAccount" :{
            "enabled" : false
        }

     }
    };

    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url, data);

    //do logic with response
    //create balanceAccounts
    callBalanceAccounts(response['id']);

}
