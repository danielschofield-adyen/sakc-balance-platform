

async function callSetPostalCode()
{

const postal = (document.getElementById('postal_value').value);
  if(postal){
    console.log("inside");
    document.getElementById("SelectionContainer").setAttribute("hidden","true");
    document.getElementById("ResponseContainer").removeAttribute("hidden");
    setTimeout(function(){
             window.location.href = 'dashboard.php?postal='+postal;
          }, 3000);
          //console.log(document.getElementById("postal").innerText);
    //document.getElementById("postal").innerText = postal;
  }
  else {
    setTimeout(function(){
             window.location.href = 'dashboard.php';
          }, 3000);
  }

}

// async function callTopUpConfirmed()
// {
//     topUpAmountInput = parseFloat(Number(document.getElementById('topUpAmountInput').value).toFixed(2));
//     callDropin(topUpAmountInput, 1, 0)
// }
