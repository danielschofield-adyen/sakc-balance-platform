async function callDashboardWidgets()
{
  let getBalanceResponse = await callGetBalance();
  if(!getBalanceResponse)
    return;

  //console.log(response['balances'][0]['available']);
  var getBalance = document.getElementById("getBalance");
  getBalance.innerText = "SGD "+(getBalanceResponse['balances'][0]['available']/100.00).toFixed(2);
  getBalance.hidden = false;

  //console.log(response['balances'][0]['available']);
  var getBalanceShopper = document.getElementById("getBalanceShopper");
  getBalanceShopper.innerText = "SGD "+(getBalanceResponse['balances'][0]['available']/100.00).toFixed(2);
  getBalanceShopper.hidden = false;

  // var getBalanceReserved = document.getElementById("getBalanceReserved");
  // getBalanceReserved.innerText = "SGD "+response['balances'][0]['reserved'];
  // getBalanceReserved.hidden = false;

}
