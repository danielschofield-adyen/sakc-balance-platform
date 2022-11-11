var message;

async function attemptRegistration()
{
    var loginform = document.getElementById("register-form");
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailAddress = document.getElementById("email").value;
    var dateOfBirth = document.getElementById("date_of_birth").value;

    data = {
        "firstName":firstName,
        "lastName":lastName,
        "username":username,
        "emailAddress":emailAddress,
        "password":password,
        "dateOfBirth":dateOfBirth
    }

    doRegistration(data)
}

async function doRegistration(data)
{
    var message = document.getElementById("message");
    const dbQueryUrl = "backend/dbQuery.php";
    const dashboardUrl = "../dashboard.php";
    const select = "SELECT * FROM \"LEM_IndividualDetails\" WHERE \"username\"='"+data["username"]+"'";

    showMessage("Checking for user",true)
    let selectUserResponse = await callServer(dbQueryUrl, select);
    if(selectUserResponse)
    {
        showMessage("Username already exists. Please login");
        return;
    }

    /* --- Create Legal Entity --- */
    showMessage("Creating LegalEntity");
    let legalEntityResponse = await callLegalEntity(data);
    if(!legalEntityResponse["id"])
    {
        handleLegalEntityError(legalEntityResponse);
        return;
    }

    /* --- Inserting Legal Entity to DB -- */
    var legalEntityInsertSQL = getLegalEntityInsertSQL(data, legalEntityResponse);
    let insertLegalEntityResponse = await callServer(dbQueryUrl,legalEntityInsertSQL);
    if(insertLegalEntityResponse)
    {
        showMessage("Error saving Legal Entity")
        return;
    }

    /* --- Create Account Holder --- */
    showMessage("Creating Account Holder");
    let accountHolderResponse = await callCreateAccountHolder(legalEntityResponse["id"]);
    if(!accountHolderResponse["id"])
    {
        showMessage("Account Holder Creation Failed, try again")
        return;
    }

    /* --- Inserting Account Holder to DB --- */
    var accountHolderInsertSQL = getAccountHolderSQL(accountHolderResponse);
    let insertAccountHolderResponse = await callServer(dbQueryUrl,accountHolderInsertSQL);
    if(insertAccountHolderResponse)
    {
        console.log("Error inserting account holder to db");
        return;
    }

    /* --- Create Balance Account --- */
    showMessage("Creating Balance Account")
    let balanceHolderResponse = await callCreateBalanceAccounts(accountHolderResponse["id"]);
    if(!accountHolderResponse["id"])
    {
        showMessage("Balance Account Creation Failed, try again")
        return;
    }

    /* --- Inserting Balance Account to DB ---*/
    var balanceAccountHolderSQL = getBalanceAccountHolderSQL(balanceHolderResponse)
    insertBalanceAccountResponse = await callServer(dbQueryUrl,balanceAccountHolderSQL);
    if(insertBalanceAccountResponse)
    {
        console.log("Error inserting balance account to db");
        return;
    }

    let json = {
        "username":data["username"],
        "firstName":data["firstName"],
        "lastName":data["lastName"],
        "emailAddress":data["emailAddress"],
        "legalEntityId":legalEntityResponse["id"],
        "accountHolderId":accountHolderResponse["id"],
        "balanceAccountId":balanceHolderResponse["id"]
    }

    /* --- Redirect to Dashboard ---*/
    showMessage("Redirecting to dashboard");
    let sessionResponse = await callServer("backend/createSession.php",json);
    console.log("Session response: "+sessionResponse);
    window.location.href = '../dashboard/index.php'

}

function showMessage(messageText,toShow = true)
{
    if(!message){
        message = document.getElementById("message");
    }

    message.innerText = messageText;
    message.hidden = !toShow;
}

function handleLegalEntityError(response)
{
    var statusCode = response["status"] ? response["status"] : "N/A";
    var detail = response["detail"] ? response["detail"] : "No detail provided.";
    var invalidField;
    if(response["invalidFields"] != null & response["invalidFields"].length > 0)
    {
        invalidField = response["invalidFields"][0]["message"];
    }
    else
    {
        invalidField = "No reason given."
    }
    showMessage("[Status Code: " + statusCode + "] " + detail +". Reason: " + invalidField, true);
}

function getLegalEntityInsertSQL(data, response)
{
    var responseAddress = response["individual"]["residentialAddress"];
    var address = responseAddress["street2"] + " " + responseAddress["street"] + " " + responseAddress["postalCode"] + " " + responseAddress["stateOrProvince"] + " " + responseAddress["country"];

    var insert = "INSERT INTO \"LEM_IndividualDetails\" (\"legalEntityId\",\"type\" ,\"residentialAddress\",\"firstName\",\"lastName\",\"dateOfBirth\",\"phone\",\"email\",\"username\",\"password\") VALUES ("
    + "'" + response["id"] + "'" + ","
    + "'" + response["type"] + "'" +  "," 
    + "'" + address + "'" +  "," 
    + "'" + response["individual"]["name"]["firstName"] + "'" +  "," 
    + "'" + response["individual"]["name"]["lastName"] + "'" +  "," 
    + "'" + response["individual"]["birthData"]["dateOfBirth"] + "'" +  "," 
    + "'" +  response["individual"]["phone"]["number"] + "'" +  "," 
    + "'" + data["emailAddress"] + "'" +  "," 
    + "'" + data["username"] + "'" +  "," 
    + "'" +  data["password"]+ "'"  
    + ")";
    console.log("Insert SQL: " + insert);
    return insert;
}

function getAccountHolderSQL(response)
{
    var insert = "INSERT INTO \"AFP_accountHolderDetails\" (\"accountHolderID\",\"description\" ,\"legalEntityId\",\"status\") VALUES ("
    + "'" + response["id"] + "'" + ","
    + "'" + response["description"] + "'" +  "," 
    + "'" + response["legalEntityId"] + "'" +  "," 
    + "'" + response["status"] + "'"
    + ")";
    console.log("Insert SQL: " + insert);
    return insert;
}

function getBalanceAccountHolderSQL(response)
{
    var balances = response["balances"];
    console.log(balances);
    console.log(balances[0]["available"]);

    var insert = "INSERT INTO \"AFP_balanceAccountsDetails\" (\"accountHolderID\",\"balanceAccountsID\" ,\"balances_available\",\"balances_balance\",\"balances_currency\",\"balances_reserved\",\"defaultCurrencyCode\",\"description\",\"sweepsID\") VALUES ("
    + "'" + response["accountHolderId"] + "'" + ","
    + "'" + response["id"] + "'" +  "," 
    + "'" + response["balances"][0]["available"] + "'" +  "," 
    + "'" + response["balances"][0]["balance"] + "'" +  "," 
    + "'" + response["balances"][0]["currency"] + "'" +  "," 
    + "'" + response["balances"][0]["reserved"] + "'" +  "," 
    + "'" + response["defaultCurrencyCode"] + "'" +  "," 
    + "'Dummy data'" +  "," 
    + "'Dummy data'"
    + ")";
    console.log("Insert SQL: " + insert);
    return insert;
}

