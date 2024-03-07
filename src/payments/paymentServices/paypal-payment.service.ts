
//Non LSP approach

// class PaypalPayment extends AbstractPaymentService {

//     processPayment() {
//         return console.log("Processing paypal Payment");
//     }
//     refundPayment() {throw new Error("refundPayment method does not support in paypal payment")}

// }

// LSP compliant approach

class PaypalPayment implements IBasePaypal{
    processPayment() {
        return console.log("Processing paypal Payment");
    }
}