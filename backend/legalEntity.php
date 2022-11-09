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
    $url = "https://kyc-test.adyen.com/lem/v1/legalEntities"; //call endpoint here

    $dateOfBirth = date("YYYY-MM-DD", strtotime($request['date_of_birth']));
    //Add any additional data not sent in the request
    $data = [
          "identificationData"=>array("number"=>"113654424","type"=>"driversLicense"),
          "phone"=> array("number"=>$request['phone_number'],"type"=>"mobile"),
          "name"=>array("firstName"=>$request['first_name'],"lastName"=>$request['last_name']),
          "birthData"=>array("dateOfBirth"=>$dateOfBirth),
          "email"=>$request["email"],
          "type"=>"individual",
          "individual"=>array(
            "residentialAddress"=>array(
                "city"=>"VALID",
                "country"=>"US",
                "postalCode"=>"94678",
                "stateOrProvince"=>"CA",
                "street"=>"Brannan Street",
                "street2"=>"274"
            )
          )
    ];

    // Convert data to JSON
    $json_data = json_encode($request);

    // Initiate curl
    $curlAPICall = curl_init();

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