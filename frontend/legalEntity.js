async function callLegalEntity(data)
{
    const url = "backend/legalEntity.php";
    const json = {
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
        "number": "+18004444444",
        "type": "mobile"
      },
      "name": {
        "firstName": data["firstName"],
        "lastName": data["lastName"]
      },
      "birthData": {
        "dateOfBirth": data["dateOfBirth"]
      },
      "email": data["email"],
      "identificationData":{
        "number":"113654424",
        "type":"driversLicense"
      }
    }
};

    let response = await callServer(url, json);
    //create AccountHolder
    return response;
}
