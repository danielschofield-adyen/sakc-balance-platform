function logout()
{
    console.log("Logging out");
    endSession();
    console.log("Session destroyed");
    window.location.href = '../index.php'
}

function endSession()
{
    json = {};
    callServer("../backend/endSession.php",json);
}