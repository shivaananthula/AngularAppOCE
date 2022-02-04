import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-createinfra',
  templateUrl: './createinfra.component.html',
  styleUrls: ['./createinfra.component.scss']
})
export class CreateinfraComponent implements OnInit {
  public newEnv: any = {

  };
  public newEnvError : string= "";

  public crimsOptions = ['Development','Release'];

  public OsType = ['windows', 'linux'];

  public DbType = ['mysql','oracle']

  public DbRestoreOptions = ['CleanDB', 'Backup File', 'Upload File'];

  public req_id: string = '';

  public ResponseData: any={

  };

  constructor(private backendservice: BackendService, private router: Router, private sharedService: SharedService) {
    
   }

  ngOnInit(): void {
  }

  async onCreateClicked(){
    const self = this;
    console.log(this.newEnv);
    this.newEnv.db_version="djw";
    this.newEnv.mt_version="vdj";
    this.newEnv.user = "user1"
    await this.backendservice.callPost("post","post/",this.newEnv).toPromise().then((data : any)=>{
      console.log(data);
      self.ResponseData = data;
    },
    (error)=>{
      alert(error.status);
    });
    
    if(this.ResponseData.Status == 'Request Accepted'){
      this.sharedService.setRequestId(this.ResponseData.Request_Id);
      localStorage.setItem('reqid',this.ResponseData.Request_Id);
      console.log(this.sharedService.getRequestId());
      this.router.navigateByUrl("/createsuccess");
    }
   
    //this.sharedService.setRequestId(this.req_id);
    //this.router.navigateByUrl("/events");
    

   
  }

  dataRefresh(){
    console.log(this.ResponseData.Request_Id);
  }

}
