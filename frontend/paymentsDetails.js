async function CallPaymentsDetails(payload)
{
    const url = "backend/paymentsDetails.php";
    const data = {
        "details": payload.details,
        "paymentData": payload.paymentData,
    };

    let response = await callServer(url, data);

    //do logic with response
    handleServerResponse(response);
}