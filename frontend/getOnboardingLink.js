async function callGetOnboardingLink()
{
    const url = "../backend/OnboardingLink.php";
    const json = {
   "themeId":"ONBT422KH223222F5GWSC8H7V758PQ",
   "redirectUrl":"https://your.return-url.com/",
   "locale":"nl-NL"
};

    let response = await callServer(url, json);
    console.log(response);
    //create AccountHolder
    window.location.href = response["url"];
}
