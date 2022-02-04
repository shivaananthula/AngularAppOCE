import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private serverURL = "http://10.135.87.4:8000/";
  public httpOptions: any;
  public request_id: string='';

  constructor(private http: HttpClient) {
  
   }

   public setRequestId(id:string){
     this.request_id = id;
   }

  defaultProcessing<T>(p: Promise<void | T>): Promise<void | T> {
    return p.then((arg: void | T) => {
      return arg;
    }, (error: any) => {
      console.log("Error ", error);
    });
  }

  callGet<T>(url: string, reqid: string): Promise<T> {
    const self = this;
    return <Promise<T>>this.http.get(this.serverURL + url,{params: {req_id: reqid}}).toPromise().then((arg) =>{
      return arg;
    }, (errResponse)=>{
      console.log("Error ", errResponse);
        alert("Error in " + url + "-> status(" + errResponse.status + ")");
    })
 
  }

  callGet1<T>(url: string, reqid: string): Observable<T> {
    const self = this;
    return <Observable<T>>this.http.get(this.serverURL + url, {params: {req_id: reqid}});
 
  }


  callDelete<T>(url: string): Promise<T> {
    const self = this;
    return <Promise<T>>this.http.delete(this.serverURL + url).toPromise().then((arg) => {
      return arg;
    }, (errResponse) => {
        console.log("Error ", errResponse);
        alert("Error in " + url + "-> status(" + errResponse.status + ")");
    });
  }

  callPutPost<T>(method: string, url: string, data: any): Promise<T> {
    const self = this;
    var observable = null;
    if ("post" == method) {
      observable = this.http.post(this.serverURL + url, data, this.httpOptions);
    } else {
      observable = this.http.put(this.serverURL + url, data, this.httpOptions);
    }
    return observable.toPromise().then((arg) => {
      return arg;
    }, (errResponse) => {
        console.log("Error ", errResponse);
        alert("Error in " + url + "-> status(" + errResponse.status + ")");
      return errResponse;
    });
  }

  callPost<T>(method: string, url:string, data: any){
    var observable = null;
    if ("post" == method) {
      return this.http.post(this.serverURL + url, data, this.httpOptions);
    } else {
      return this.http.put(this.serverURL + url, data, this.httpOptions);
    }
  }

  public createEnvironment(env: any): Promise<any> {
    return this.callPutPost("post", "/post/", env);
  }
}
