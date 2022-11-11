async function attemptLogin()
{
    var loginform = document.getElementById("login-form");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var json = {
        "username":username,
        "password":password
    }

    checkUsernameDb(json);
}

async function checkUsernameDb(data)
{
    const dbQueryUrl = "backend/dbQuery.php";
    const sessionUrl = "backend/createSession.php"
    const dashboardUrl = "../dashboard.php";
    const selectUserSQL = "SELECT * FROM \"LEM_IndividualDetails\" WHERE \"username\"='"+data["username"]+"'";
    
    /* --- Select from DB --- */
    let selectUserResponse = await callServer(dbQueryUrl, selectUserSQL);
    if(!selectUserResponse)
    {
        showMessage("User not found by Username. Please Register");
        return;
    }

    showMessage("User found! Logging in...");

    /* --- Select Account Holder from DB --- */
    var selectAccountHolderSQL = getAccountHolderSQL(selectUserResponse);
    let accountHolderResponse = await callServer(dbQueryUrl, selectAccountHolderSQL);
    if(!accountHolderResponse)
        return false;

    /* --- Select Balance Account from DB --- */
    var selectBalanceAccountSQL = getBalanceAccountSQL(accountHolderResponse);
    let balanceAccountResponse = await callServer(dbQueryUrl, selectBalanceAccountSQL);
    if(!balanceAccountResponse)
        return false;

    var userResponseJSON = JSON.parse(selectUserResponse);
    var accountHolderResponseJSON = JSON.parse(accountHolderResponse);
    var balanceAccountResponseJSON = JSON.parse(balanceAccountResponse);

    let json = {
        "username":userResponseJSON["username"],
        "firstName":userResponseJSON["firstName"],
        "lastName":userResponseJSON["lastName"],
        "emailAddress":userResponseJSON["email"],
        "legalEntityId":userResponseJSON["legalEntityId"],
        "accountHolderId":accountHolderResponseJSON["accountHolderID"],
        "balanceAccountId":balanceAccountResponseJSON["balanceAccountsID"]
    }

    console.log(json);

    /* --- Redirect to Dashboard ---*/
    showMessage("Redirecting to dashboard");
    let sessionResponse = await callServer("backend/createSession.php",json);
    console.log("Session response: "+sessionResponse);
    window.location.href = '../dashboard/dashboard.php'
}

function showMessage(messageText,toShow = true)
{
    if(!message){
        message = document.getElementById("message");
    }

    message.innerText = messageText;
    message.hidden = !toShow;
}

function getAccountHolderSQL(data)
{
    if(data.length > 0)
    {
        var array = JSON.parse(data[0]);
        return "SELECT * FROM \"AFP_accountHolderDetails\" WHERE \"legalEntityId\"='"+array["legalEntityId"]+"'";
    }
}

function getBalanceAccountSQL(data)
{
    if(data.length > 0)
    {
        var array = JSON.parse(data[0]);
        return "SELECT * FROM \"AFP_balanceAccountsDetails\" WHERE \"accountHolderID\"='"+array["accountHolderID"]+"'";
    }
}