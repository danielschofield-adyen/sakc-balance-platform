var dropin;

async function callDropin()
{
    let paymentMethodResponse = await callPaymentMethods()

    //do logic with response
    if (dropin != undefined) {
        dropin.unmount();
        console.log("Reloading Drop-in")
    }

    configuration = {
        paymentMethodsResponse: paymentMethodResponse,
        clientKey: "test_H7MSZIX745E3DAIO4AO6MKBMWEKWMR6S",  //Harded for now, tried to pull from backend and .env but not successful. Can someone do it?
        // clientKey: "{{ env('CLIENT_KEY') }}",
        locale: "en-US",
        environment: "test",
        countryCode: "US",
        amount: {
          currency: "USD",
          value: amountInput.value*100,
        },
        onSubmit: (state) => { //Assign event handler when pay button is clicked
            if (state.isValid) {
                callPayments(state);
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