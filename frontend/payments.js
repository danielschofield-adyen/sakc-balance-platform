async function callPaymentsTEST()
{
    const url = "backend/payments.php";
    const data = {
        "merchantAccount":"Demo_FoodPanda",
        "amount":{
            "value":amountInput.value*100,
            "currency":"USD"
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

//Initiate a payment - When the shopper selects the pay button
//A temporary store to keep payment data to be sent in additional payment details and redirects.
//This is more secure than a cookie. In a real application this should be in a database.
const paymentDataStore = {};

async function callPayments(state)
{
    const url = "backend/payments.php";
    const data = {
        "merchantAccount":"Demo_FoodPanda",
        "amount":{
            "value":amountInput.value*100,
            "currency":"USD"
        },
        "paymentMethod": state.data.paymentMethod, //Required
        "reference": orderRef, //Required
        "channel": "Web",
        "countryCode": "US",
        "origin": "http://localhost:3000/apiCallExample.html",
        "returnUrl": `http://localhost:3000/backend/handleShopperRedirect?orderRef=${orderRef}`, //Required for redirect flow
        "browserInfo": state.data.browserInfo,
        "splits":[
            {
                 "amount":{
                     "value":(amountInput.value*100)*.9
                 },
                 "type":"BalanceAccount",
                 "account":"BA32272223222C5GW6JQ3B882",
                 "reference":"hjsvhdsguvygsuyv"
              },
              {
                 "amount":{
                     "value":(amountInput.value*100)*.1
                 },
                 "type":"Commission",
                 "reference":"jhsdfvhjgvudgsu"
              }
           ]
    };
    
    let response = await callServer(url, data);

    const { action } = response;
    //If there is an action, temporarily save paymentData so you don't loose the data in the redirect/action
    if (action) {
      paymentDataStore[orderRef] = action.paymentData;
    }

    //do logic with response
    handleServerResponse(response);
}