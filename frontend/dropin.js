var dropin;

async function callDropin(amountValue, splitOne, splitTwo, balanceAccount)
{
    callUnmountPayment()

    let paymentMethodResponse = await callPaymentMethods(amountValue)

    configuration = {
        paymentMethodsResponse: paymentMethodResponse,
        clientKey: "test_H7MSZIX745E3DAIO4AO6MKBMWEKWMR6S",  //Harded for now, tried to pull from backend and .env but not successful. Can someone do it?
        // clientKey: "{{ env('CLIENT_KEY') }}",
        locale: "en-US",
        environment: "test",
        countryCode: "SG",
        amount: {
            currency: "SGD",
            value: amountValue*100,
        },
        onSubmit: (state) => { //Assign event handler when pay button is clicked
            if (state.isValid) {
                 callPayments(state, splitOne, splitTwo, balanceAccount, amountValue);
            }
        },
        onAdditionalDetails: (state) => { //Assign event handler when additional details are required
            CallPaymentsDetails(state.data)
        },
        onError: (state) => {
            console.log(state);
        },
        paymentMethodsConfiguration: {
   card: { // Example optional configuration for Cards
     hasHolderName: true,
     holderNameRequired: true,
     enableStoreDetails: true,
     hideCVC: false, // Change this to true to hide the CVC field for stored cards
     name: 'Credit or debit card' // onSubmit configuration for card payments. Overrides the global configuration.
   }
 }
    }

    checkout = await AdyenCheckout(configuration);
    dropin = checkout.create("dropin", {showRemovePaymentMethodButton: true}).mount(document.getElementById("dropin-container"));

}
