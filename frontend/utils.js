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

