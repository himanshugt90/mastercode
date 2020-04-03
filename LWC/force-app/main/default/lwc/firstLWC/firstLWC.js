import { LightningElement, track } from 'lwc';

export default class FirstLWC extends LightningElement {
    @track userInput="Hi";
    @track showDiv=false;
    @track cityList=['Jaipur','Alwar','Sikar','Kota'];
   callHandler(event){
    this.userInput=event.target.value;
   }
   clickHandler(event){
    this.showDiv=event.target.checked;
   }
}