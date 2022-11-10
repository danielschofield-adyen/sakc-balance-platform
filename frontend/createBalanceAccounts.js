async function callCreateBalanceAccounts(accountHolderId)
{
    const url = "backend/createBalanceAccounts.php";
    const data = {
 "accountHolderId":accountHolderId,
  "description":"Main balance account",
  "defaultCurrencyCode":"SGD"
};

    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url, data);

    //do logic with response
}
