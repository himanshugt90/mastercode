import { LightningElement,api,track } from 'lwc';

export default class CarTile extends LightningElement {
    @api car;
    @api selectedCarId;
    handleCarSelect(event){
        console.log("select car");
        event.preventDefault();
        const carId=this.car.Id;
        console.log("select car id "+carId);
        const carSelect= new CustomEvent('carselect',{detail:carId});
        this.dispatchEvent(carSelect);
    }
    get isCarSelected(){
        if(this.car.Id===this.selectedCarId){
            return "tile selected";
        }
        return "tile";
    }
    
}