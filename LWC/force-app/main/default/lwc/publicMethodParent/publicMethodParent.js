import { LightningElement , track} from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;
    handleClick(){
       const childCom= this.template.querySelector('c-public-method-child');
       childCom.selectCheckBox(this.value);
    }
    handleInput(e)
    {
        this.value=e.target.value;
    }
}