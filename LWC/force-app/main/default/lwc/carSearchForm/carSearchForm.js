import { LightningElement, track, wire } from "lwc";
import getCarTypes from "@salesforce/apex/CarSearchFormController.getCarTypes";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class CarSearchForm extends LightningElement {
  @track carTypes;
  @wire(getCarTypes)
  wiredCarTypes({ data, error }) {
    if (data) {
      this.carTypes = [{ label: "All Types", value: "" }];
      data.forEach(element => {
        const carType = {};
        
        carType.label = element.Name;
        carType.value = element.Id;
        this.carTypes.push(carType);
      });
    } else if (error) {
      this.showToast("error", error.body.message, "error");
    }
  }

  showToast(title, message, varient) {
    const evt = new ShowToastEvent({
      title: title,
      message: message,
      varient: varient
    });
    this.dispatchEvent(evt);
  }
}
