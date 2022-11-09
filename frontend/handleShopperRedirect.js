//Handle the redirect - verify or complete the payment using data from the redirected page
async function handleShopperRedirect() {
  let queryString = window.location.search.substring(16); //removing the ?redirectResult
  if (queryString != ""){
    const payload = {
      "details": {
        "redirectResult": queryString,
      }
    };

    try {
      const response = await CallPaymentsDetails(payload);
    } catch (err) {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
      // res.render('error.ejs', {redirectPassData: JSON.stringify(err)})
    }
  }
}