//Handle the redirect - verify or complete the payment using data from the redirected page
//Handle both POST & GET requests
app.all("/backend/handleShopperRedirect", async (req, res) => {
    //Create the payload for submitting payment details, if it is a GET, getting it from req.query and if it is a POST, getting it from req.body
    const orderRef = req.query.orderRef;
    const redirect = req.method === "GET" ? req.query : req.body;
    const details = {};
    if (redirect.redirectResult) {
      details.redirectResult = redirect.redirectResult;
    } else {
      details.MD = redirect.MD;
      details.PaRes = redirect.PaRes;
    }
    const payload = {
      details,
      paymentData: paymentDataStore[orderRef],
    };
  
    try {
      globalRequestToAdyen = payload;
      const response = await checkout.paymentsDetails(payload);
  
      //Conditionally handle different result codes for the shopper
      switch (response.resultCode) {
        case "Authorised":
          // window.alert("Success.\nThis will normall redirect you to another page.\nThe transaction has been successfully processed.");
          res.render('success.ejs', {redirectPassData: JSON.stringify(response)})
          break;
        case "Pending":
        case "Received":
          // window.alert("Pending.\nThis will normall redirect you to another page.\nThe transaction is pending.");
          res.render('pending.ejs', {redirectPassData: JSON.stringify(response)})
          break;
        case "Refused":
          // window.alert("Refused.\nThis will normall redirect you to another page.\nThe transaction has been refused.");
          res.render('refused.ejs', {redirectPassData: JSON.stringify(response)})
          break;
        default:
          // window.alert("Error.\nThis will normall redirect you to another page.\nSomething went wrong.");
          res.render('error.ejs', {redirectPassData: JSON.stringify(response)})
          break;
      }
    } catch (err) {
      console.error(`Error: ${err.message}, error code: ${err.errorCode}`);
      res.render('error.ejs', {redirectPassData: JSON.stringify(err)})
    }
});