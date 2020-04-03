import { LightningElement, track } from 'lwc';

export default class SimpleLWCCalculator extends LightningElement {
    firstNumber;
    secondNumber;
    @track result;
    @track allResult=[];
    @track displayAll=false;
    numberHandler(event){
       const boxName= event.target.name;
       if(boxName==='firstNumber')
       {
            this.firstNumber=event.target.value;
            console.log(this.firstNumber);
       }else if(boxName==='secondNumber')
       {
            this.secondNumber=event.target.value;
            console.log(this.secondNumber);

       }
    }
    add(event){
            const n1=parseInt(this.firstNumber);
            const n2=parseInt(this.secondNumber);
            
            this.result=`Result:${n1+n2}`;
            const res=`${n1}+${n2}=${this.result}`;
            this.allResult.push(res);
            
    }
    sub(event){
        const n1=parseInt(this.firstNumber);
        const n2=parseInt(this.secondNumber);
        
        this.result=`Result:${n1-n2}`;
        const res=`${n1}-${n2}=${this.result}`;
        this.allResult.push(res);
       
}
mul(event){
    const n1=parseInt(this.firstNumber);
    const n2=parseInt(this.secondNumber);
    
    this.result=`Result:${n1*n2}`;
    const res=`${n1}*${n2}=${this.result}`;
            this.allResult.push(res);
    
}
divison(event){
    const n1=parseInt(this.firstNumber);
    const n2=parseInt(this.secondNumber);
    
    this.result=`Result:${n1/n2}`;
    const res=`${n1}/${n2}=${this.result}`;
            this.allResult.push(res);
   
}
showAll(event){
    this.displayAll=event.target.checked;
}
}