import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
task;
priority;
EmailSend;
userName;
showMailButton=true;
  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
    this.task=JSON.parse(localStorage.getItem('task'));
    console.log(this.task);
    this.userName=localStorage.getItem('userName');
if(this.task.fav){
  this.priority='High';
}else{this.priority='Moderate'}
  }

  getMailID(){
    this.showMailButton=!this.showMailButton;
    
  }
sendMail(){
if(this.EmailSend.length>1){
  let email = {
    to: this.EmailSend,
    cc: '',
    bcc: '',
    attachments: [
      
    ],
    subject: 'Task To Complete',
    body: 'Task name :  '+this.task.taskName+'<br><br>Task Description :'+this.task.taskDescription+
         '<br><br>Start Date  :  '+this.task.taskDate+
         '<br><br>End Date   : '+this.task.taskEndDate+
         '<br><br>Priority  : '+this.priority+
         '<br> <br><br><br><br><br><br><label style="margin-left:5cm">Regards<label><br><br> <label style="margin-left:5cm"> - <label>'+
         this.userName,
    isHtml: true
  }
  this.emailComposer.open(email);  
}}

}
