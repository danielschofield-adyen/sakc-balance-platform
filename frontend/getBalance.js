async function callGetBalance()
{
    const url = "backend/getBalance.php";
    const data = {};

    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url);

    //do logic with response
  console.log(response);
}
