async function callPaymentsTEST()
{
    const url = "../backend/payments.php";
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
        "storePaymentMethod":"true",
        "reference":"Jason via DEMO SAKC",
        "returnUrl":"https://your-company.com/..."
    };

    let response = await callServer(url, data);

    //do logic with response
    return response;
}


//Global order number
const orderRef = Math.floor(Math.random() * Date.now()); //Unique ref for the transaction

async function callPayments(state, splitOne, splitTwo, balanceAccount, amountValue)
{
    if ((splitOne && splitTwo) == undefined){
        splitOne = 0.9;
        splitTwo = 0.1;
    }
    if ((balanceAccount) == undefined){
        balanceAccount = "BA32272223222C5GWV9F6263K";
    }

    const url = "../backend/payments.php";
    const data = {
        // "merchantAccount":"Demo_FoodPanda",
        "amount":{
            "value":amountValue*100,
            "currency":"SGD"
        },
        "paymentMethod": state.data.paymentMethod, //Required
        "reference": orderRef, //Required
        "channel": "Web",
        "countryCode": "SG",
        "storePaymentMethod":"true",
        "origin": "https://sakc-balance-platform.herokuapp.com/dashboard/checkout.php",
        "returnUrl": "https://sakc-balance-platform.herokuapp.com/dashboard/checkout.php",
        "browserInfo": state.data.browserInfo,
        "authenticationData": { //required for native 3DS2
            "threeDSRequestData": {
                "nativeThreeDS": "preferred"
            }
         },
        "splits":[
            {
                 "amount":{
                       "value":Math.round((amountValue*100)*splitOne)
                 },
                 "type":"BalanceAccount",
                 "account":balanceAccount,
                 "reference":"Top Up"
              },
              {
                 "amount":{
                      "value":Math.round((amountValue*100)*splitTwo)
                 },
                 "type":"Commission",
                 "reference":"Top Up"
              }
           ]
    };

    let response = await handleSubmission(url, data);

}
