async function callLegalEntity()
{
    const url = "backend/legalEntity.php";
    const data = {};
    
    let response = await callServer(url, data);

    //do logic with response
}