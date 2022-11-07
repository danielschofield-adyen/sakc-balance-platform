<?php
/**
 * Adyen Checkout Example (https://www.adyen.com/)
 * Copyright (c) 2019 Adyen BV (https://www.adyen.com/)
 * /paymentMethods Documentation: https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v40/paymentMethods
 */

/**
 * Use this as a template to make API calls using php
 * 
 */

 //Get data from frontend
if (file_get_contents('php://input') != '') {
    $request = json_decode(file_get_contents('php://input'), true);
} else {
    $request = array();
}

//set api key, merchant account and url
$apikey = $_ENV["CHECKOUT_APIKEY"]; //update with platform or checkout api keys
$merchantAccount = $_ENV["MERCHANT_ACCOUNT"]; //not using this
$url = "https://[endpoint]"; //call endpoint here

//Add any additional data not sent in the request
$data = [];

// Convert data to JSON
$json_data = json_encode(array_merge($data, $request));

// Initiate curl
$curlAPICall = curl_init();

// Set to POST
curl_setopt($curlAPICall, CURLOPT_CUSTOMREQUEST, "POST");

// Will return the response, if false it print the response
curl_setopt($curlAPICall, CURLOPT_RETURNTRANSFER, true);

// Add JSON message
curl_setopt($curlAPICall, CURLOPT_POSTFIELDS, $json_data);

// Set the url
curl_setopt($curlAPICall, CURLOPT_URL, $url);

// Api key
curl_setopt($curlAPICall, CURLOPT_HTTPHEADER,
    array(
        "X-Api-Key: " . $apikey,
        "Content-Type: application/json",
        "Content-Length: " . strlen($json_data)
    )
);

// Execute
$result = curl_exec($curlAPICall);

// Error Check
if ($result === false){
    throw new Exception(curl_error($curlAPICall), curl_errno($curlAPICall));
}

// Closing
curl_close($curlAPICall);

// This file returns a JSON object
print($result);
