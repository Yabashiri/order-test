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
    event.preventDefault(); //prevent default behaviour
    const fields = event.detail.fields;
    fields.Client__c = this.selectedRecordId[0]; //create a custom Client__c record
    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }
}