

async function callsetPayout(option)
{

if(option=="Daily"){
  document.getElementById("Hour").removeAttribute("hidden");
  document.getElementById("Minutes").removeAttribute("hidden");
  document.getElementById("Weekly").disabled = true;
  document.getElementById("Monthly").disabled = true;

}
else if (option=="Weekly") {
  document.getElementById("Day").removeAttribute("hidden");
  document.getElementById("Hour").removeAttribute("hidden");
  document.getElementById("Minutes").removeAttribute("hidden");
  document.getElementById("Daily").disabled = true;
  document.getElementById("Monthly").disabled = true;
}
else {
  document.getElementById("Date").removeAttribute("hidden");
  document.getElementById("Hour").removeAttribute("hidden");
  document.getElementById("Minutes").removeAttribute("hidden");
  document.getElementById("Weekly").disabled = true;
  document.getElementById("Daily").disabled = true;  
}
    // document.getElementById("").removeAttribute("hidden");
    // document.getElementById("btn-topup").removeAttribute("hidden");

}

// async function callTopUpConfirmed()
// {
//     topUpAmountInput = parseFloat(Number(document.getElementById('topUpAmountInput').value).toFixed(2));
//     callDropin(topUpAmountInput, 1, 0)
// }
