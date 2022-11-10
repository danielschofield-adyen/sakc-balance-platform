var wallet;
var checkBalanceAccountResponse = 18;    // ********* Remove once GET to Balance Account is ready *******

async function callWallet()
{
    callUnmountPayment()
    console.log("Loading Wallet")

    // ********* Remove once GET to Balance Account is ready *******
    checkBalanceAccountResponse = parseFloat(Number(document.getElementById('checkBalanceAccountResponse').value).toFixed(2));
    console.log("Balance Account: ", checkBalanceAccountResponse)
    // ********* Remove once GET to Balance Account is ready *******
    // use checkBalanceAccountResponse to query Balance Account

    // let checkBalanceAccountResponse = await callPaymentMethods() //call Balance Account to check the balance

    if (checkBalanceAccountResponse >= totalCartCost){
        wallet = document.getElementById("confirmTransfer").innerHTML = '<p>Please confirm you want to transfer</p>';
        document.getElementById("btn-transfer").removeAttribute("hidden");
    } else {
        wallet = document.getElementById("otherPayments").innerHTML = '<p>You do not have enough balance in your Wallet!</p><p>Please pay via Credit Card or split payments</p>';
    }
}