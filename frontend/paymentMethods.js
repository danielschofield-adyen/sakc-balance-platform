async function callPaymentMethodsTEST()
{
    const url = "../backend/paymentMethods.php";
    const data = {
        // "merchantAccount":"Demo_FoodPanda", //Harded for now, tried to pull from backend and .env but not successful. Can someone do it?
        "countryCode":"SG",
        "amount":
        {
            "currency":"SGD",
            "value":amountInput.value*100
        }
    };

    let response = await callServer(url, data);

    //do logic with response
    return response;
}

async function callPaymentMethods(amountValue)
{
    if ((amountValue) == undefined){
        amountValue = totalCartCost;
    }
    const url = "../backend/paymentMethods.php";
    const data = {
        // "merchantAccount":"Demo_FoodPanda", //Harded for now, tried to pull from backend and .env but not successful. Can someone do it?
        "countryCode":"SG",
        "amount":
        {
            "currency":"SGD",
            "value":amountValue*100
        }
    };

    let response = await callServer(url, data);

    //do logic with response
    return response;
}
