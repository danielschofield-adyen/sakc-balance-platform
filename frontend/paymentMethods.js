async function callPaymentMethods()
{
    const url = "backend/paymentMethods.php";
    const data = {
        "merchantAccount":"DanielSchofield_Ecomm",
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