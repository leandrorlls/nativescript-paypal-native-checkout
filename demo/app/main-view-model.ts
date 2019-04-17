import { Observable } from 'tns-core-modules/data/observable';
import { PaypalNativeCheckout } from 'nativescript-paypal-native-checkout';

export class HelloWorldModel extends Observable {
  public message: string;
  private paypalNativeCheckout: PaypalNativeCheckout;

  constructor() {
    super();

    this.paypalNativeCheckout = new PaypalNativeCheckout();
    this.message = this.paypalNativeCheckout.message;
  }
}
