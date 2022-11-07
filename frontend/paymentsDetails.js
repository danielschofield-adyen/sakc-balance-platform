async function CallPaymentsDetails(payload)
{
    const url = "backend/paymentsDetails.php";
    const data = { payload };

    let response = await callServer(url, data);

    //do logic with response
    return response;
}