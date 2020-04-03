import { LightningElement,track,api,wire } from 'lwc';
/*import {createRecord, getRecord} from 'lightning/uiRecordApi';*/
const fieldArray=['Account.Name','Account.Phone','Account.Website'];
export default class CreateAccountLdsLwc extends LightningElement {
    @track recordId;
    /* @track name;
    @track phone;
    @track url;
    
    @wire(getRecord,{recordId:'$recordId',fields:fieldArray})
    accountRec;
    handleInput(e){ 
        const targetBox=e.target.name;
        if(targetBox==="Name"){
            this.name=e.target.value;
            console.log(e.target.value);
        }else if(targetBox==="Phone"){
            this.phone=e.target.value;
            console.log(e.target.value);
        }else if(targetBox==="Website"){
            this.url=e.target.value;
            console.log(e.target.value);
        }
    };
    handleSave(){
        const fields={'Name':this.name,'Phone':this.phone,'Website':this.url};
        const recordInput={apiName:'Account',fields};
        createRecord(recordInput).then(Response=>{
            console.log('Account Created :' + Response.id);
            this.recordId=Response.id;
            console.log('this.recordId :' + this.recordId);
        }).catch(error=>{
            console.log('Error - '+ error.body.message);
        }
        );

    }
    get retName(){
        if(this.accountRec.data){
            console.log(this.accountRec.data.fields.Name.value)
            return this.accountRec.data.fields.Name.value;
        }
        return undefined;
    }
    get retPhone(){
        if(this.accountRec.data){
            console.log(this.accountRec.data.fields.Phone.value)

            return this.accountRec.data.fields.Phone.value;
        }
        return undefined;
    }
    get retWebsite(){
        if(this.accountRec.data){
            console.log(this.accountRec.data.fields.Website.value)

            return this.accountRec.data.fields.Website.value;
        }
        return undefined;
    }*/
    successHandler(event){
        this.recordId=event.detail.id;
    }
}