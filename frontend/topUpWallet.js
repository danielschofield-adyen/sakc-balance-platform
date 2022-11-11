var topup;
var topUpAmountInput = 0;

async function callTopUpWallet()
{
    callUnmountPayment()
    console.log("Loading Top Up")

    document.getElementById("topUpAmount-container").removeAttribute("hidden");
    document.getElementById("btn-topup").removeAttribute("hidden");

    topup = true;
}

async function callTopUpConfirmed()
{
    topUpAmountInput = parseFloat(Number(document.getElementById('topUpAmountInput').value).toFixed(2));
    callDropin(topUpAmountInput, 1, 0)
}