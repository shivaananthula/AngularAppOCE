import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-createsuccess',
  templateUrl: './createsuccess.component.html',
  styleUrls: ['./createsuccess.component.scss']
})
export class CreatesuccessComponent implements OnInit {
  public requestId: string=''
  constructor(private sharedService: SharedService, private router: Router) {
    this.requestId = this.sharedService.getRequestId();
    console.log(this.requestId);
   }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigateByUrl("/events");
  }

}
