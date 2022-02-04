import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private req_id: string=''
  constructor() { }

  setRequestId(data:string){
    this.req_id = data;
  }

  getRequestId(){
    return this.req_id;
  }
}
