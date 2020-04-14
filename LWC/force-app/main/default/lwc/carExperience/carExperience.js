import { LightningElement,api,track} from 'lwc';
import getCarExp from '@salesforce/apex/carExperienceController.getCarExp';

export default class CarExperience extends LightningElement {

    @api carId;
     @track carExperiences;
    connectedCallback(){
        this.getCarExperiences();
    }
    getCarExperiences(){
        console.log("312312-"+this.carId);
        getCarExp( { carId: this.carId } ).then((exp)=>{
            this.carExperiences=exp;
            console.log(JSON.stringify(exp));
        }).catch((error)=>{
            console.log(error);
        })
    }
    get hasExp(){
        if(this.carExperiences){
            return true;
        }
        return false;
    }
}