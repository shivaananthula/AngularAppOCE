import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/services/shared.service';
import { IEvent } from 'src/app/interfaces/event';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, } from '@angular/core';

declare function showModal(name: string): void;
declare function hideModal(name: string): void;
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public newEvent:any ={

  };

  

  public events: IEvent[]=[];
  public isExists :boolean=true;
  public req_id: string = '';
  constructor(private backendService: BackendService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService, private modalservice: NgbModal) { 
    this.req_id= this.sharedService.getRequestId();

    if(localStorage.getItem('reqid')==''){
      localStorage.setItem('reqid', this.req_id);
    }
    console.log(localStorage.getItem('reqid'));
    if(this.req_id==''){
      this.req_id= localStorage.getItem('reqid') || '';
    }
    console.log("events");
    console.log(this.sharedService.getRequestId());
  
    
    const self = this;
    console.log(this.req_id);
    
    this.onStart();
    
     
  }

  async onStart(){
    const self = this;
    console.log(this.req_id);
    await this.backendService.callGet1("get_events/",this.req_id).toPromise().then(
      (response: any)=> {
        self.events = response;
        console.log(response);
      }, (errResponse)=>{
        self.isExists= false;
      }
    ); 
    console.log(this.events);
  }

  ngOnInit(): void {
    
  }

  

  showModal(contentmodal:any, event:IEvent){
    this.modalservice.open(contentmodal, {
      centered:true,
      backdrop:'static'
    });
    
    document.getElementById("command")?.setAttribute('value', event.event_cmd);
    document.getElementById("log")?.setAttribute('value',event.event_log);
  }



}
