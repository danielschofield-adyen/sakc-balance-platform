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

    //do logic with response\

}

async function doDatabaseCall()
{
    const url = "backend/dbQuery.php";

    //You can test a db insert into a dummy table here
    const data = "INSERT INTO test (testRef, testData) VALUES ('TestA', 'TestData1')";

    //You can test a db select from a dummy table here
    const select = "SELECT * FROM test";


    let response = await callServer(url, select);
}