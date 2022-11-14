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
    showLoadingScreen("Checking for user", true);

    /* Admin login hack */
    if(data["username"] === "admin" & data["password"] != "admin")
    {
        showErrorMessage("Incorrect Password. Please try again");
        showLoadingScreen();
        return;
    }

    if(data["username"] === "admin" & data["password"] === "admin")
    {
        let json = {
            "username":"admin",
            "firstName":"FoodPanda",
            "lastName":"",
            "emailAddress":"",
            "legalEntityId":"LE322JV223222F5GVVCB37KDH",
            "type":"organisation",
            "accountHolderId":"AH3227C223222C5GVVCB46Z8W",
            "balanceAccountId":"BA3227C223222C5GVVCB46Z93"
        }

        redirectToDashboard(json);
        return;
    }
    /* ------------- */

    /* Admin login hack */
    if(data["username"] === "shopper" & data["password"] != "shopper")
    {
        showErrorMessage("Incorrect Password. Please try again");
        showLoadingScreen();
        return;
    }

    if(data["username"] === "shopper" & data["password"] === "shopper")
    {
        let json = {
            "username":"Shopper",
            "firstName":"",
            "lastName":"",
            "emailAddress":"",
            "legalEntityId":"LE322JV223222F5GWT62L3J8C",
            "type":"individual",
            "accountHolderId":"AH32272223222C5GWT62MDT3B",
            "balanceAccountId":"BA32272223222C5GWT62NDT4D"
        }

        redirectToDashboard(json);
        return;
    }
    /* ------------- */

    const dbQueryUrl = "backend/dbQuery.php";
    const sessionUrl = "backend/createSession.php"
    const dashboardUrl = "../dashboard.php";
    const selectUserSQL = "SELECT * FROM \"LEM_IndividualDetails\" WHERE \"username\"='"+data["username"]+"'";
    
    /* --- Select from DB --- */
    let selectUserResponse = await callServer(dbQueryUrl, selectUserSQL);
    if(!selectUserResponse)
    {
        showErrorMessage("User not found by Username. Please Register");
        showLoadingScreen();
        return;
    }

    var userResponseJSON = JSON.parse(selectUserResponse);
    if(data["password"] != userResponseJSON["password"])
    {
        showErrorMessage("Incorrect Password. Please try again");
        showLoadingScreen();
        return;
    }

    showLoadingScreen("User found! Logging in...", true);

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


    var accountHolderResponseJSON = JSON.parse(accountHolderResponse);
    var balanceAccountResponseJSON = JSON.parse(balanceAccountResponse);

    let json = {
        "username":userResponseJSON["username"],
        "firstName":userResponseJSON["firstName"],
        "lastName":userResponseJSON["lastName"],
        "emailAddress":userResponseJSON["email"],
        "legalEntityId":userResponseJSON["legalEntityId"],
        "type":userResponseJSON["type"],
        "accountHolderId":accountHolderResponseJSON["accountHolderID"],
        "balanceAccountId":balanceAccountResponseJSON["balanceAccountsID"]
    }

    console.log(json);

    redirectToDashboard(json);
}

async function redirectToDashboard(json)
{
        /* --- Redirect to Dashboard ---*/
        showMessage("Redirecting to dashboard", true);
        let sessionResponse = await callServer("../backend/createSession.php",json);
        showLoadingScreen();
        console.log("Session response: "+sessionResponse);
        window.location.href = '../dashboard/dashboard.php'
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