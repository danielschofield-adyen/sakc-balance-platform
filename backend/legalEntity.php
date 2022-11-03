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
function getLegalEntity() {
    if (file_get_contents('php://input') != '') {
        $request = json_decode(file_get_contents('php://input'), true);
    } else {
        $request = array();
    }

    $password = $_ENV["LEM_BASICAUTH_PWD"];
    $user=$_ENV["LEM_BASICAUTH_USERNAME"];
    //$apikey = $_ENV["CHECKOUT_APIKEY"];
    $url = "https://kyc-test.adyen.com/lem/v1/legalEntities"; //call endpoint here

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

    // basic auth
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, $user.":".$password);
    curl_setopt($ch, CURLOPT_HTTPHEADER,array("Content-type: application/json"));


    // Execute
    $result = curl_exec($curlAPICall);

    // Error Check
    if ($result === false){
      throw new Exception(curl_error($curlAPICall), curl_errno($curlAPICall));
    }

    // Closing
    curl_close($curlAPICall);

    // This file returns a JSON object
    return $result;
}
