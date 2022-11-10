async function callPaymentsTEST()
{
    const url = "backend/payments.php";
    const data = {
        // "merchantAccount":"Demo_FoodPanda",
        "amount":{
            "value":amountInput.value*100,
            "currency":"SGD"
        },
        "paymentMethod":{
            "type": "scheme",
            "encryptedCardNumber": "test_4111111111111111",
            "encryptedExpiryMonth": "test_03",
            "encryptedExpiryYear": "test_2030",
            "encryptedSecurityCode": "test_737"
        },
        "reference":"Jason via DEMO SAKC",
        "returnUrl":"https://your-company.com/..."
    };
    
    let response = await callServer(url, data);

    //do logic with response
    return response;
}


//Global order number
const orderRef = Math.floor(Math.random() * Date.now()); //Unique ref for the transaction

async function callPayments(state)
{
    const url = "backend/payments.php";
    const data = {
        // "merchantAccount":"Demo_FoodPanda",
        "amount":{
            "value":totalCartCost*100,
            "currency":"SGD"
        },
        "paymentMethod": state.data.paymentMethod, //Required
        "reference": orderRef, //Required
        "channel": "Web",
        "countryCode": "SG",
        "origin": "http://localhost:3000/apiCallExample.html",
        // "returnUrl": `http://localhost:3000/backend/handleShopperRedirect?orderRef=${orderRef}`, //Required for redirect flow
        "returnUrl": "http://localhost:3000/shoppingCart.html",
        "browserInfo": state.data.browserInfo,
        "authenticationData": { //required for native 3DS2
            "threeDSRequestData": {
                "nativeThreeDS": "preferred"
            }
         },
        // "splits":[
        //     {
        //          "amount":{
        //              "value":(amountInput.value*100)*.9
        //          },
        //          "type":"BalanceAccount",
        //          "account":"BA32272223222C5GW6JQ3B882",
        //          "reference":"hjsvhdsguvygsuyv"
        //       },
        //       {
        //          "amount":{
        //              "value":(amountInput.value*100)*.1
        //          },
        //          "type":"Commission",
        //          "reference":"jhsdfvhjgvudgsu"
        //       }
        //    ]
    };

    let response = await handleSubmission(url, data);

}