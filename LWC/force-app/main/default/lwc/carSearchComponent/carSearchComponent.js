import { LightningElement,track } from 'lwc';

export default class CarSearchComponent extends LightningElement {
    @track carTypeId;
    carTypeSelectEventCall(event){
        this.carTypeId=event.detail;
    }
}