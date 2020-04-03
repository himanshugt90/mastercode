import { LightningElement,wire,track,api } from 'lwc';
import getAllAccount from '@salesforce/apex/accountManager.getAccount';
export default class WireCallServerController extends LightningElement {
@wire(getAllAccount)
accounts;

}