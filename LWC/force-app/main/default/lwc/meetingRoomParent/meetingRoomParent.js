import { LightningElement, track } from 'lwc';

export default class MeetingRoomParent extends LightningElement {
    @track meetingRoomSelected;
    meetingRoomInfo=[
        {roomName:'R-01', roomCapacity:'12'},
        {roomName:'R-02', roomCapacity:'06'},
        {roomName:'R-03', roomCapacity:'20'},
        {roomName:'R-04', roomCapacity:'10'}
    ];
    onTileSelected(e){
        const detail=e.detail;
        this.meetingRoomSelected=detail.roomName;
        console.log("hi---"+this.meetingRoomSelected);
    }
    constructor(){
        super();
        this.template.addEventListener('tileclick',this.onTileSelected.bind(this));
    }


}