async function callLegalEntity(data)
{
    const url = "backend/legalEntity.php";
    const json = {
    "type": "individual",
    "individual": {
      "residentialAddress": {
        "city": "VALID",
        "country": "SG",
        "postalCode": "94678",
        "stateOrProvince": "SG",
        "street": "Brannan Street",
        "street2": "274"
      },
      "nationality":"SG",
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
