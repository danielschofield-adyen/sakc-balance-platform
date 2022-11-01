const configuration = 
{
    paymentMethodsResponse: paymentMethodsResponse, // The `/paymentMethods` response from the server.
    clientKey: clientKey, // Web Drop-in versions before 3.10.1 use originKey instead of clientKey.
    locale: "en-US",
    environment: "test",
    analytics: {
        enabled: true // Set to false to not send analytics data to Adyen.
    },
    onSelect: (activeComponent) => { updateStateContainer(activeComponent.data);},
    onChange: (state) => { updateStateContainer(state);},
    onSubmit: (state, dropin) => {
    // Global configuration for onSubmit
    // Your function calling your server to make the `/payments` request
    makePayment(state.data)
        .then(response => {
        if (response.action) {
            // Drop-in handles the action object from the /payments response
            dropin.handleAction(response.action);
        } else {
            // Your function to show the final result to the shopper
            handleResult(response, dropin);
        }
        })
        .catch(error => {
        throw Error(error);
        });
    },
    onAdditionalDetails: (state, dropin) => {
        // Your function calling your server to make a `/payments/details` request
        makeDetailsCall(state.data)
        .then(response => {
            if (response.action) {
            // Drop-in handles the action object from the /payments response
            dropin.handleAction(response.action);
            } else {
            // Your function to show the final result to the shopper
            handleResult(response, dropin);
            }
        })
        .catch(error => {
            throw Error(error);
        });
    }
};

// 1. Create an instance of AdyenCheckout
const checkout = await AdyenCheckout(configuration);
const dropin = checkout.create('dropin').mount('#dropin-container')