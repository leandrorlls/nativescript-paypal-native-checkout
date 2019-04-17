var PaypalNativeCheckout = require("nativescript-paypal-native-checkout").PaypalNativeCheckout;
var paypalNativeCheckout = new PaypalNativeCheckout();

describe("greet function", function() {
    it("exists", function() {
        expect(paypalNativeCheckout.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(paypalNativeCheckout.greet()).toEqual("Hello, NS");
    });
});