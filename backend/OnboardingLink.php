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

$username = $_ENV["LEM_BASICAUTH_USERNAME"];
$password = $_ENV["LEM_BASICAUTH_PWD"];
$url = "https://kyc-test.adyen.com/lem/v2/legalEntities/LE322KH223222F5GWSCK624RK/onboardingLinks"; //call endpoint here

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

//Basic Auth

curl_setopt($curlAPICall, CURLOPT_HEADER, false);
curl_setopt($curlAPICall, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curlAPICall, CURLOPT_USERPWD, $username.":".$password);

// Api key
curl_setopt($curlAPICall, CURLOPT_HTTPHEADER,
    array(
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
