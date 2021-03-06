import { LightningElement,api,track} from 'lwc';
import getCarExp from '@salesforce/apex/carExperienceController.getCarExp';

export default class CarExperience extends LightningElement {

    privateId;
     @track carExperiences;

    @api 
    get carId(){
        return this.privateId;
    }
    set carId(value){
       
        this.privateId=value;
        this.getCarExperiences();
    }

    connectedCallback(){
        this.getCarExperiences();
    }
    @api
    getCarExperiences(){
        console.log("312312-"+this.carId);
        getCarExp( { carId: this.privateId } ).then((exp)=>{
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