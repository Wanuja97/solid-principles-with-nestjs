class StripePayment extends AbstractPaymentService {
    processPayment() {
        return console.log("Processing Stripe Payment");
    }
    refundPayment() {
        return console.log("Refunding Stripe Payment");
    }

}
