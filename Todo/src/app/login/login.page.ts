import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpserviceService } from '../shared/httpservice.service';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login="Login"
dis=true;

dis2=false;
userData:FormGroup
  constructor( private toaster:ToastController, public menuCtrl: MenuController,private fb:FormBuilder,private http:HttpserviceService,private route:Router) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

//Submit button From Login And Register
  onSubmit(){
    const formData = new FormData();
    
    //Login Submit

    if(this.login==='Login'){
      let userName=this.userData.get('userName').value;
      formData.append('password',this.userData.get('password').value);
      this.http.login(userName,formData).subscribe((res:any)=>{
      //  console.log(res);
       if(res.message!=="Not Found"){
        this.presentToast();
        this.route.navigate(['./task/'+userName])
       }else{
        this.presentToast2();
       }
      },(err)=>{
        console.log(err);
      })
     
    }
    //Register Submit
    else{
      if(this.userData.get('password').value===this.userData.get('password2').value){
        console.log("err")
        formData.append('userName',this.userData.get('userName').value);
      formData.append('password',this.userData.get('password').value);
      console.log("data ",this.userData)
      this.http.register(formData).subscribe((res)=>{
        console.log(res);  this.onClick();
        this.presentToast();
      },(err)=>{
        console.log(err);  
      })
      }else{this.presentToast3()}
    }
 

  }
  //Navigate Between Login And Registration

  onClick(){
    this.userData.patchValue({userName:'',password:'',password2:''})
    this.dis=!this.dis;
    this.dis2=!this.dis2;
    if(this.dis2){
      this.login="Register";
    }
    else{
      this.login="Login"
    }
  }
  ngOnInit() {
    this.userData=this.fb.group({
      userName:['', []],
      password:['', []],
      password2:['', []]
    })
  }
//Toster Sucess
  async presentToast() {
    const toast = await this.toaster.create({
      position:'top',
      color:'success',
      message: 'Successful !',
      duration: 2000,
    
    });
    toast.present();
  }
//Toster Failure
  async presentToast2() {
    const toast = await this.toaster.create({
      position:'top',
      color:'danger',
      message: 'UnAuthentic User',
      duration: 1000,
    });
    toast.present();
  }
  //Toaster Password Not Matched
  async presentToast3() {
    const toast = await this.toaster.create({
      position:'top',
      color:'danger',
      message: 'Password Matched',
      duration: 1000,
    });
    toast.present();
  }
}
