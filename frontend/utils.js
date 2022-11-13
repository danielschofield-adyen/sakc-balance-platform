// Generic POST Helper
const httpPost = (endpoint, data) =>
    fetch(`backend/${endpoint}.php`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());

    /*
async function callServer(url, data) {

    console.log("Request URL: "+url+" => " , data);
    const res = await fetch(url, {
        method: "POST",
        body: (JSON.stringify(data)),
        headers: {
            "Content-Type": "application/json"
        }
    })

    try {
        data = await res.json();
        console.log("Response URL: "+url+" =>" , data);
        return data;
    }
    catch(err) {
        if(err instanceof SyntaxError)
            console.log("Empty or No Response from DB");
        else        
            console.log("Error: ",err);
        return false;
    }
}
*/

async function callServer(url, data) {

    console.log("Request URL: "+url+" => " , data);
    const res = await fetch(url, {
        method: "POST",
        body: (JSON.stringify(data)),
        headers: {
            "Content-Type": "application/json"
        }
    })

    try {
        data = await res.json();
        console.log("Response URL: "+url+" =>" , data);
        return data;
    }
    catch(err) {
        if(err instanceof SyntaxError)
            console.log("Empty or No Response from DB");
        else        
            console.log("Error: ",err);
        return false;
    }
}


function showErrorMessage (messageText, toShow = true)
{
    message = document.getElementById("errorMessage");
    message.innerText = messageText;
    message.hidden = !toShow;
}

function showMessage(messageText, toShow = true)
{
    message = document.getElementById("message");
    message.innerText = messageText;
    message.hidden = !toShow;
}

function showLoadingScreen(messageText = "", toShow = false)
{
    var message = document.getElementById("message");
    var greyOut = document.getElementById("grey-out");
    var loadingImage = document.getElementById("loading-image");

    message.hidden = !toShow;
    greyOut.hidden = !toShow;
    greyOut.style.visibility = !toShow ? "hidden" : "visible";
    loadingImage.hidden = !toShow;

    showMessage(messageText, toShow);
}


