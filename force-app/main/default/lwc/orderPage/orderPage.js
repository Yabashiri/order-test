import { LightningElement } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class App extends LightningElement {
  objectname = "Order_custom__c";
  title = "Order";
  orderPageIsVisible = true;

  selectedRecordId; //store the record id of the selected 
  handleValueSelected(event) {
      this.selectedRecordId = event.detail;
  }

  handleSuccess() {
    const event = new ShowToastEvent({
        variant: 'success',
        title: 'Success!',
        message: 'Order has been created.',
    });
    this.dispatchEvent(event);
}

  handleSubmit(event) {
  }
}