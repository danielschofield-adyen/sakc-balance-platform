async function callLegalEntity()
{
    const url = "backend/legalEntity.php";
    const data = {
    "type": "individual",
    "individual": {
      "residentialAddress": {
        "city": "VALID",
        "country": "US",
        "postalCode": "94678",
        "stateOrProvince": "CA",
        "street": "Brannan Street",
        "street2": "274"
      },
      "phone": {
        "number": "+14153671502",
        "type": "mobile"
      },
      "name": {
        "firstName": "Simone",
        "lastName": "Hopper"
      },
      "birthData": {
        "dateOfBirth": "1981-12-01"
      },
      "email": "s.hopper@example.com",
      "identificationData":{
        "number":"113654424",
        "type":"driversLicense"
      }
    }
};

    let response = await callServer(url, data);
    //create AccountHolder
    callCreateAccountHolder(response['id']);
    //do logic with response
}
