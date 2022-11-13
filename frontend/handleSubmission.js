async function handleSubmission(url, state) {
  try {
    const res = await callServer(url, state);
    // handleServerResponse(res);
    if (res.action) {
        dropin.handleAction(res.action);
    } else {
      if (res.resultCode == "Authorised") {
                dropin.setStatus('success', { message: 'Payment successful!' });
                window.setTimeout(function(){

                 // Move to a new location or you can do something else
                 window.location.href="success.php";

              }, 5000);

              } else {
                dropin.setStatus('error', { message: 'Something went wrong.'});
                window.setTimeout(function(){

                 // Move to a new location or you can do something else
                 window.location.href="refused.php";

              }, 5000);

              }
    }
  } catch (error) {
    console.error(error);
  }
}
