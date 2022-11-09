async function attemptRegistration()
{
    var loginform = document.getElementById("register-form");
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var dateOfBirth = document.getElementById("date_of_birth").value;

    data = {
        "firstName":firstName,
        "lastName":lastName,
        "username":username,
        "password":password,
        "phoneNumber":phoneNumber,
        "dateOfBirth":dateOfBirth
    }

    doRegistration(data)
}

async function doRegistration(data)
{
    var message = document.getElementById("message");
    const dbQueryUrl = "backend/dbQuery.php";
    const dashboardUrl = "../dashboard.php";
    const select = "SELECT username FROM users WHERE username = " + data["username"];
    const insert = "INSERT INTO LEM_IndividualDetails (legalEntityId,type,residentialAddress,firstName,lastName,dateOfBirth,phone,email,username,password) VALUES ()";
    let response = await callServer(dbQueryUrl, select);
    if(!response)
    {
        message.innerText = "Adding user to database";
        message.hidden = false;
        console.log("Adding user to database");
        
        //do /legalEntity call here

        //do db insert here
        //callServer(dashboardUrl,data);
    }
    else
    {
        message.innerText = "Username already exists. Please login";
        message.hidden = false;
        console.log("User already exists");
    }
}