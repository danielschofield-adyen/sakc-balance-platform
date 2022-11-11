var wallet;
var availableBalance = 18;    // ********* Remove once GET to Balance Account is ready *******

async function callWallet()
{
    var balanceAccountId = '<%= Session["balanceAccountId"] ?? "" %>';
    console.log("balance id is", balanceAccountId)

    callUnmountPayment()
    console.log("Loading Wallet")

    checkBalanceAccountResponse = await callGetBalance() //call Balance Account to check the balance
    let availableBalance = parseFloat((checkBalanceAccountResponse.balances[0].available/100).toFixed(2));

    document.getElementById("availableBalance").innerHTML = availableBalance.toFixed(2);
    document.getElementById("wallet").removeAttribute("hidden");


    if (availableBalance >= totalCartCost){
        wallet = document.getElementById("confirmTransfer").innerHTML = '<p>Please confirm you want to transfer</p>';
        document.getElementById("btn-transfer").removeAttribute("hidden");
    } else {
        wallet = document.getElementById("otherPayments").innerHTML = '<p>You do not have enough balance in your Wallet!</p><p>Please pay via Credit Card or split payments</p>';
    }
}

