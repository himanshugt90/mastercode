import { LightningElement, track, wire } from "lwc";
import getCarTypes from "@salesforce/apex/CarSearchFormController.getCarTypes";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin(LightningElement) {
  @track carTypes;
  @wire(getCarTypes)
  wiredCarTypes({ data, error }) {
    
    if (data) {
      this.carTypes = [{ label: 'All Types', value: '' }];
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
  
  handleChange(event){
    const carTypeId=event.detail.value;
    
    const carTypeSelectionChangeEvent=new CustomEvent('cartypeselectevent',{detail:carTypeId});
    this.dispatchEvent(carTypeSelectionChangeEvent);
  }
  createNewCarType(){
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
          objectApiName: 'Car_Type__c',
          actionName: 'new',
      },
  });
    
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
