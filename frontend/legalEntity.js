async function callLegalEntity()
{
    const url = "backend/legalEntity.php";
    const data = {
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
        "countryCode": "SG",
        "number": "65978717",
        "type": "mobile"
      },
      "name": {
        "firstName": "Victor",
        "lastName": "Tang"
      },
      "birthData": {
        "dateOfBirth": "1990-12-01"
      },
      "email": "s.hopper@example.com"
    }
};

    let response = await callServer(url, data);
    //create AccountHolder
    callCreateAccountHolder(response['id']);
    //do logic with response
}
