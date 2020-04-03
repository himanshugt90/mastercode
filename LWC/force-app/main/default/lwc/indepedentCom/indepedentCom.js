import { LightningElement , track, wire} from 'lwc';
import {registerListener, unregisterAllListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation'
export default class IndepedentCom extends LightningElement {
@track selectedMeetingRoom={};

@wire(CurrentPageReference) pageRef;
connectedCallback(){
    registerListener('pubsubtitleclick',this.onMeetingRoomSelected,this);
}

disconnectedCallback(){
    unregisterAllListener(this);
}
onMeetingRoomSelected(payload){
this.selectedMeetingRoom=payload;
}

}