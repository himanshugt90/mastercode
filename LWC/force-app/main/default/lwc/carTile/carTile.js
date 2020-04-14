import { LightningElement,api,track ,wire} from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class CarTile extends LightningElement {
    @api car;
    @api selectedCarId;
@wire(CurrentPageReference) pageRef;

    handleCarSelect(event){
       
        event.preventDefault();
        const carId=this.car.Id;
       
        const carSelect= new CustomEvent('carselect',{detail:carId});
        this.dispatchEvent(carSelect);

        fireEvent(this.pageRef,'carselect',this.car.Id);
    }
    get isCarSelected(){
        if(this.car.Id===this.selectedCarId){
            return "tile selected";
        }
        return "tile";
    }
    
}