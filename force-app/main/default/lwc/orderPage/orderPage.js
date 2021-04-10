import { LightningElement } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class App extends LightningElement {
  title = "Order";
  orderPageIsVisible = true;

  handleSuccess() {
    const event = new ShowToastEvent({
        variant: 'success',
        title: 'Success!',
        message: 'Order has been created.',
    });
    this.dispatchEvent(event);
}
}