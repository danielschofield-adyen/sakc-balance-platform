var dropin;

async function callDropin(amountValue, splitOne, splitTwo)
{
    callUnmountPayment()

    let paymentMethodResponse = await callPaymentMethods()

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
                callPayments(state, splitOne, splitTwo);
            }
        },
        onAdditionalDetails: (state) => { //Assign event handler when additional details are required
            CallPaymentsDetails(state.data)
        },
        onError: (state) => {
            console.log(state);
        }
    }

    checkout = await AdyenCheckout(configuration);
    dropin = checkout.create("dropin").mount(document.getElementById("dropin-container"));

}