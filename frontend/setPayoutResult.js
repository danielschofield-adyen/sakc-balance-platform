

async function callsetPayoutResult()
{

    document.getElementById("SelectionContainer").setAttribute("hidden","true");
  document.getElementById("ResponseContainer").removeAttribute("hidden");
  setTimeout(function(){
           window.location.href = 'dashboard.php';
        }, 3000);

}

// async function callTopUpConfirmed()
// {
//     topUpAmountInput = parseFloat(Number(document.getElementById('topUpAmountInput').value).toFixed(2));
//     callDropin(topUpAmountInput, 1, 0)
// }
