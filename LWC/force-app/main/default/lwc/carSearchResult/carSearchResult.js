import { LightningElement,api, wire,track } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCar'

export default class CarSearchResult extends LightningElement {
    
    @api carTypeId;
    @track cars;
    @track selectedCarId;

    @wire(getCars,{carTypeId:'$carTypeId'})
    wiredCars({data,error}){
        if(data){
           this.cars= data;
        }else if(error){
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
      handleCarSelect(event){
            const carId=event.detail;
            this.selectedCarId=carId;
            
      }
      get carFound(){
         if(this.cars){
             return true;
         }else{
             return false;
         }
      }
}