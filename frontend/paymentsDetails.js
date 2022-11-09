async function CallPaymentsDetails(payload)
{
    const url = "backend/paymentsDetails.php";
    const data = {
        "details": payload.details,
        "paymentData": payload.paymentData,
    };

    handleSubmission(url, data);
}