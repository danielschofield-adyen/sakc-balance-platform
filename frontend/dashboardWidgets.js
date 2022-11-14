async function callDashboardWidgets()
{
  let getBalanceResponse = await callGetBalance();
  if(!getBalanceResponse)
    return;

  var getBalance = document.getElementById("getBalance");
  if(!getBalance)
    return;
  
  getBalance.innerText = "SGD "+(getBalanceResponse['balances'][0]['available']/100.00).toFixed(2);
  getBalance.hidden = false;

  var getBalanceShopper = document.getElementById("getBalanceShopper");
  if(!getBalanceShopper)
    return;

  getBalanceShopper.innerText = "SGD "+(getBalanceResponse['balances'][0]['available']/100.00).toFixed(2);
  getBalanceShopper.hidden = false;
}
