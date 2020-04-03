import { LightningElement, track ,api} from 'lwc';

export default class CheckboxGroupBasic extends LightningElement {
    @track value = ['Red'];

    options=[
            { label: 'Red', value: 'Red' },
            { label: 'Blue', value: 'Blue' }
            ];

    @api selectCheckBox(checkBoxValue)
    {
        const selectedCheckBox=this.options.find(checkBox=>{
            return checkBoxValue.toUpperCase() === checkBox.value.toUpperCase();
        })
        if(selectedCheckBox)
        {
            this.value=selectedCheckBox.value;
            return "Success";
        }
        return "No Sucess";
    }

    
}
