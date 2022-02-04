import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-searchrequest',
  templateUrl: './searchrequest.component.html',
  styleUrls: ['./searchrequest.component.scss']
})
export class SearchrequestComponent implements OnInit {

   public events=[];
  public req_Id:string='';
  public eventErr:string='';
  constructor(private backend_service: BackendService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    // this.backend_service.callGet1("get_events/",'user1-20220203-5065').subscribe(
    //   (response:any)=> {
    //     this.events = response;
    //     console.log(response);
    //   }
    // );
    // console.log(this.events);
  }

  onSearch(){
    // this.backend_service.callGet1("get_events/",this.req_Id).subscribe(
    //   (response:any)=> {
    //     this.events = response;
    //     console.log(this.events);
    //   }
    // );
    // console.log(this.events);
    // if(this.events.length==0){
      
    //   this.eventErr='Please enter valid request Id.';
    //   console.log(this.eventErr)
    // }
    // else{
    //   this.eventErr=''; 
    // }
    this.sharedService.setRequestId(this.req_Id);
    localStorage.setItem('reqid',this.req_Id);
    this.router.navigateByUrl("/events");
    
  }

}
