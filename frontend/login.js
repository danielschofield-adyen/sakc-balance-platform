async function attemptLogin()
{
    var loginform = document.getElementById("login-form");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    checkUsernameDb(username)
}

async function checkUsernameDb(username)
{
    var message = document.getElementById("message");
    const dbQueryUrl = "backend/dbQuery.php";
    const dashboardUrl = "../dashboard.php";
    const select = "SELECT username FROM users WHERE username = " + username;
    let response = await callServer(dbQueryUrl, select);
    if(!response)
    {
        console.log("No username found");
        message.innerText = "User not found by Username. Please Register";
        message.hidden = false;
    }
    else
    {
        message.innerText = "User found!";
        message.hidden = false;
        data = {
            "username":username,
        }
        callServer(dashboardUrl,data);
    }
}