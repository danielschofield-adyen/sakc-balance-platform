async function doApiCall()
{
    const url = "backend/[name of php file].php";
    const data = {
        "key":"value",
        "arrayKey": {"key":"value"},
        "arrayKeyMultipleValues": 
        {
            "key":"value",
            "secondKey":"value"
        }
    };
    
    //call serve generic function from frontend/utils.js
    //make sure to include frontend/utils.js to any frontend html page that needs to make API calls
    let response = await callServer(url, data);

    //do logic with response
    return response;
}