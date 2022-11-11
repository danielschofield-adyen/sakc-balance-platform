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
    checkBalanceAccountResponse = await callGetBalance() //call Balance Account to check the balance
    let availableBalance = parseFloat((checkBalanceAccountResponse.balances[0].available/100).toFixed(2));

    document.getElementById("availableBalance").innerHTML = availableBalance.toFixed(2);
    document.getElementById("wallet").removeAttribute("hidden");
    
    console.log("Balance Account: ", availableBalance)
    
    splitWalletAmountInput = parseFloat(Number(document.getElementById('splitWalletAmountInput').value).toFixed(2));
    console.log("Split Wallet Amount: ", splitWalletAmountInput)

    if (splitWalletAmountInput <= availableBalance){
        split = document.getElementById("splitWarning").innerHTML = '<div id="splitWarning"></div>';
        callTransferBalance(splitWalletAmountInput)

        //Maybe add error checks, if successful transfer then continue to dropin, if not stop flow

        totalCartCost = totalCartCost - splitWalletAmountInput;
        callDropin(totalCartCost)

    } else {
        document.getElementById("btn-split").setAttribute("hidden", true);
        split = document.getElementById("splitWarning").innerHTML = '<p>You do not have enough balance in your Wallet!</p>';
    }
}