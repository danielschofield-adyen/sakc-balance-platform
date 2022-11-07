//Handles the Server response - how to handle the responses sent from the server to the client
function handleServerResponse(res) {
    if (res.action) {
        dropin.handleAction(res.action);
    } else {
      switch (res.resultCode) {
        case "Authorised":
          window.alert("Success.\nThis will normall redirect you to another page.\nThe transaction has been successfully processed.");
          // window.location.href = "/success";
          break;
        case "Pending":
        case "Received":
          window.alert("Pending.\nThis will normall redirect you to another page.\nThe transaction is pending.");
          // window.location.href = "/pending";
          break;
        case "Refused":
          window.alert("Refused.\nThis will normall redirect you to another page.\nThe transaction has been refused.");
          // window.location.href = "/failed";
          break;
        default:
          window.alert("Error.\nThis will normall redirect you to another page.\nSomething went wrong.");
          // window.location.href = "/error";
          break;
      }
    }
  }