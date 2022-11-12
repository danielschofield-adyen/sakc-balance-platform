async function callDashboardWidgets()
{
  let getBalanceResponse = await callGetBalance();
  


  //console.log(response['balances'][0]['available']);
  var getBalance = document.getElementById("getBalance");
  getBalance.innerText = "SGD "+getBalanceResponse['balances'][0]['available'];
  getBalance.hidden = false;

  var getBalanceReserved = document.getElementById("getBalanceReserved");
  getBalanceReserved.innerText = "SGD "+response['balances'][0]['reserved'];
  getBalanceReserved.hidden = false;

}
