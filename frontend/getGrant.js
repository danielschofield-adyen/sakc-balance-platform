async function callGetGrant()
{
    const url = "../backend/getGrant.php";
    const data = {

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
