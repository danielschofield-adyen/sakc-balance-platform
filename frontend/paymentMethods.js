async function callPaymentMethods()
{
    const url = "backend/paymentMethods.php";
    const data = {

        "merchantAccount":"KhushBP_Partner",
        "countryCode":"NL",
        "amount":
        {
            "currency":"EUR",
            "value":1000
        }
    };

    let response = await callServer(url, data);

    //do logic with response
}
