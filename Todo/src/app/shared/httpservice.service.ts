import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  url="http://192.168.0.110:3000/user";
  register(formData){
    return this.http.post<any>(this.url+"/register",formData);
   }
   login(userName,formdata){
     return this.http.post(this.url+"/login/"+userName,formdata);
   }
   registerTask(formdata,userName){
     console.log("In service");
     return this.http.post(this.url+"/registerTask/"+userName,formdata);
   }
   getTasks(userName){
     return this.http.get(this.url+"/"+userName);
   }
   deleteTask(taskName){
    // console.log("in delete service "+taskName)
     return this.http.delete(this.url+"/"+taskName);
   }
   updateT(formdata,oldtaskName){
     return this.http.post(this.url+"/updatetask/"+oldtaskName,formdata)
   }
   updateColr(taskName,fav){
     console.log("in update color");
     console.log(taskName)
    // console.log(fav);
    // console.log("in the Update service "+taskName);
      return this.http.post(this.url+"/favourite/"+taskName,fav);
   }
   updateDetails(formdata,oldTaskName){
     console.log("in the all update method");
     return this.http.post(this.url+"/updateDetails/"+oldTaskName,formdata);
   }
   taskCompleted(taskName,fav){
     console.log("In the task Completed service")
     return this.http.post(this.url+"/complete/"+taskName,fav);
   }
  constructor(private http:HttpClient) { }
}
