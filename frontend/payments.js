async function callPayments()
{
    const url = "backend/payments.php";
    const data = {
  "paymentMethod": {
    "type": "scheme",
    "number": "4111111111111111",
    "cvc": "737",
    "expiryMonth": "03",
    "expiryYear": "2030",
    "holderName": "John Smith"
  },
  "amount": {
    "value": 40000,
    "currency": "SGD"
  },
  "reference": "test1234",
  "merchantAccount": "KhushBP_Partner",
  "returnUrl": "https://your-company.com/",
  "splits":[
    {
         "amount":{
             "value":40000
         },
         "type":"BalanceAccount",
         "account":"BA32272223222C5GW6JQ3B882",
         "reference":"hjsvhdsguvygsuyv"
      },
      {
         "amount":{
             "value":0
         },
         "type":"Commission",
         "reference":"jhsdfvhjgvudgsu"
      }
   ]
};

    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url, data);

    //do logic with response
}
