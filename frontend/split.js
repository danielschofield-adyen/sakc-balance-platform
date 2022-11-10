var split;
var splitWalletAmountInput = 0;

async function callSplit()
{
    callUnmountPayment()
    console.log("Loading Split")

    document.getElementById("splitWallet").removeAttribute("hidden");
    document.getElementById("btn-split").removeAttribute("hidden");

    split = true;
}

async function callSplitPay()
{
    // ********* Remove once GET to Balance Account is ready *******
    checkBalanceAccountResponse = parseFloat(Number(document.getElementById('checkBalanceAccountResponse').value).toFixed(2));
    console.log("Balance Account: ", checkBalanceAccountResponse)
    // ********* Remove once GET to Balance Account is ready *******
    // use checkBalanceAccountResponse to query Balance Account

    // let checkBalanceAccountResponse = await callPaymentMethods() //call Balance Account to check the balance

    
    splitWalletAmountInput = parseFloat(Number(document.getElementById('splitWalletAmountInput').value).toFixed(2));
    console.log("Split Wallet Amount: ", splitWalletAmountInput)

    console.log("inside callSplitPay")

    if (splitWalletAmountInput <= checkBalanceAccountResponse){
        console.log("inside if")
        split = document.getElementById("splitWarning").innerHTML = '<div id="splitWarning"></div>';
        //call transfer with splitWalletAmountInput

        //call dropin with difference from splitWalletAmountInput and totalCartCost
        totalCartCost = totalCartCost - splitWalletAmountInput;
        callDropin()

    } else {
        console.log("inside else")
        document.getElementById("btn-split").setAttribute("hidden", true);
        split = document.getElementById("splitWarning").innerHTML = '<p>You do not have enough balance in your Wallet!</p>';
    }
}