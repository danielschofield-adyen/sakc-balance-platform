async function callUnmountPayment()
{
    if (dropin != undefined){
        dropin.unmount();
        dropin = undefined;
        console.log("Unmounting Drop-in")
    }
    if (wallet != undefined){
        document.getElementById("wallet-container").innerHTML = '<div id="otherPayments"></div><div id="confirmTransfer"></div><button id="btn-transfer" hidden="true" class="btn btn-primary btn-lg btn-block" onclick="callTransferBalance(totalCartCost)">Transfer</button><div id="transferResponse"></div>';
        wallet = undefined;
        console.log("Unmounting Wallet")
    }
    if (split != undefined){
        document.getElementById("split-container").innerHTML = '<div id="splitWallet" hidden="true"><label for="splitWalletAmountInput">Wallet Amount to use: </label><input type="number" class="form-control" min="0" id="splitWalletAmountInput" name="splitWalletAmountInput" value="0" style="width: 4em"></div><br><div id="splitWarning"></div><button id="btn-split" hidden="true" class="btn btn-primary btn-lg btn-block" onclick="callSplitPay()">Pay</button></div>';
        split = undefined;
        console.log("Unmounting Split")
    }
    if (topup != undefined){
        document.getElementById("topup-container").innerHTML = '<div id="topUpAmount-container" hidden="true"><label for="topUpAmountInput">Top Up Amount: </label><input type="number" class="form-control" min="0" id="topUpAmountInput" name="topUpAmountInput" value="0" style="width: 4em"></div><br><button id="btn-topup" hidden="true" class="btn btn-primary btn-lg btn-block" onclick="callTopUpConfirmed()">Top Up</button>';
        topup = undefined;
        console.log("Unmounting Top Up")
    }
}