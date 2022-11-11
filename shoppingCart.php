<?php
session_start();
?>
<html>
 <head>  
    <script id="adyen-web-script" src="https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/5.12.0/adyen.js"
    crossorigin="anonymous"></script>
    <link id="adyen-web-stylesheet" rel="stylesheet"
    href="https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/5.12.0/adyen.css"
    crossorigin="anonymous">
    <script src="frontend/utils.js"></script>
    <script src="frontend/shoppingCart.js"></script>
    <script src="frontend/paymentMethods.js"></script>
    <script src="frontend/payments.js"></script>
    <script src="frontend/handleServerResponse.js"></script>
    <script src="frontend/handleShopperRedirect.js"></script>
    <script src="frontend/handleSubmission.js"></script>
    <script src="frontend/paymentsDetails.js"></script>
    <script src="frontend/wallet.js"></script>
    <script src="frontend/split.js"></script>
    <script src="frontend/unmountPayment.js"></script>
    <script src="frontend/dropin.js"></script>
    <script src="frontend/getBalance.js"></script>
    <script src="frontend/transferBalance.js"></script>
    <script src="frontend/displayResponse.js"></script>
    <script src="frontend/topUpWallet.js"></script>
 </head>
 <body onload="handleShopperRedirect()">
   <header class="main-header">
      <nav class="nav main-nav">
            <ul>
               <li><a href="apiCallExample.html">API Call Example Function Page</a></li>
            </ul>
      </nav>
      <h1 class="main-title">Shopping Cart Sample</h1>
   </header>
   <div class="container">
      <br>
      <h2>Mixed Plate Sample</h2>
      <img src="https://asianfoodnetwork.com/content/dam/afn/global/en/articles/foodpanda/AFN_foodpanda_nasi_lemak%20small.jpg.transform/desktop-img/img.jpg" alt="Mixed Plate Sample" style="width:450px;height:300px;">
      <p>A little bit of this and a little bit of that to satisfy everyone's requirements!</p>
      <p>Price: $16.89</p>
      <label for="qtyInput">Quantity:</label>
      <input type="number" min="0" id="qtyInput" name="qtyInput" value="1" style="width: 3em" step="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57" title="Numbers only" onchange="updateCost(this.value)">
      <br>
      <br>
   </div>
   <div class="payment">
      <h3 class="total">
         Total: $ 
         <span id="totalCartCost">16.89</span>
      </h3>
      <br>
      <br>
      <h3 class="wallet" id="wallet" hidden="true">
         Wallet Balance: $ 
         <span id="availableBalance">0.00</span>
      </h3>
      <h2>Payment</h2>
      <button style="width:300px;height:100px;font-size:32;" onclick="callWallet()">Wallet</button>
      <br>
      <br>
      <button style="width:300px;height:100px;font-size:32;" onclick="callDropin(totalCartCost)">Card</button>
      <br>
      <br>
      <button style="width:300px;height:100px;font-size:32;" onclick="callSplit()">Split (Wallet + Card)</button>
      <br>
      <br>
      <button style="width:300px;height:100px;font-size:32;" onclick="callTopUpWallet()">Top Up Wallet</button>
      <br>
      <br>
      <div id="wallet-container">
         <div id="otherPayments"></div>
         <div id="confirmTransfer"></div>
         <button id="btn-transfer" hidden="true" style="width:150px;height:50px;font-size:32;" onclick="callTransferBalance(totalCartCost)">Transfer</button>
         <div id="transferResponse"></div>
      </div>
      <div id="split-container">
         <div id="splitWallet" hidden="true">
            <label for="splitWalletAmountInput">Wallet Amount to use: </label>
            <input type="number" min="0" id="splitWalletAmountInput" name="splitWalletAmountInput" value="0" style="width: 4em">
         </div>
         <br>
         <div id="splitWarning"></div>
         <button id="btn-split" hidden="true" style="width:150px;height:50px;font-size:32;" onclick="callSplitPay()">Pay</button>
      </div>
      <div id="topup-container">
         <div id="topUpAmount-container" hidden="true">
            <label for="topUpAmountInput">Top Up Amount: </label>
            <input type="number" min="0" id="topUpAmountInput" name="topUpAmountInput" value="0" style="width: 4em">
         </div>
         <br>
         <button id="btn-topup" hidden="true" style="width:150px;height:50px;font-size:32;" onclick="callTopUpConfirmed()">Top Up</button>
      </div>
      <br>
      <div id="dropin-container"></div>
   </div>
 </body>
</html>