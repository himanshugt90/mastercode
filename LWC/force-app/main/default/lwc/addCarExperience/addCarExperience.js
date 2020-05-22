import { LightningElement,api } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CAR_EXP_OBJECT from '@salesforce/schema/Car_Experience__c';
import NAME_FIELD from '@salesforce/schema/Car_Experience__c.Name';
import EXP_FIELD from '@salesforce/schema/Car_Experience__c.Experience__c';
import CAR_FIELD from '@salesforce/schema/Car_Experience__c.car__c';

export default class AddCarExperience extends LightningElement {
    @api carId;
    title='';
    description='';
    
    handleTitle(event){
        this.title=event.target.value;
        
    }
    handleDesscription(event){
        this.description=event.target.value;
    }
    handleAdd(){
        
        const fields={};
        fields[NAME_FIELD.fieldApiName]=this.title;
        fields[EXP_FIELD.fieldApiName]=this.description;
        fields[CAR_FIELD.fieldApiName]=this.carId;
        console.log

        const recordInput={apiName:CAR_EXP_OBJECT.objectApiName,fields};
        createRecord(recordInput).then(carExp=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Thank You!',
                    message: 'Experience Saved',
                    variant: 'success',
                }),
            );
            const carExpCustomEvent=new CustomEvent('carexpcustom');
            this.dispatchEvent(carExpCustomEvent);
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
    }
    
}