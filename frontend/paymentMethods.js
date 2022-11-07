async function callPaymentMethods()
{
    const url = "backend/paymentMethods.php";
    const data = {
        "merchantAccount":"Demo_FoodPanda", //Harded for now, tried to pull from backend and .env but not successful. Can someone do it?
        "countryCode":"US",
        "amount":
        {
            "currency":"USD",
            "value":amountInput.value*100
        }
    };
    
    let response = await callServer(url, data);

    //do logic with response
    return response;
}