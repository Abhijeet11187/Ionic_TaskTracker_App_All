import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../shared/httpservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-edit-more',
  templateUrl: './edit-more.page.html',
  styleUrls: ['./edit-more.page.scss'],
})
export class EditMorePage implements OnInit {
editForm:FormGroup;
notifyTitle;
notifyNotes;
oldTaskName;
  constructor(private alertController: AlertController,private calender: Calendar,private route:Router, private fb:FormBuilder,private http: HttpserviceService,private route1:ActivatedRoute) { }
task;
  ngOnInit() {
this.task=JSON.parse(localStorage.getItem('task'));
this.oldTaskName=this.task.taskName;
console.log("Inthe Eddit",this.task);
this.editForm=this.fb.group({
  taskName:[this.task.taskName],
  taskDescription:[this.task.taskDescription],
  taskDate:[this.task.taskDate],
  fav:[this.task.fav],
  taskEndDate:[this.task.taskEndDate], 
  taskNotify:[this.task.taskNotify],
  taskStartTime:[this.task.taskStartTime],
  taskEndTime:[this.task.taskEndTime]
})
if(this.task.taskNotify!==true){this.task.taskNotify=false}
  }

  OnEdit(){
    
console.log("In edit");

    const formdata=new FormData();
    
   if(this.editForm.get('taskNotify').value===null || this.editForm.get('taskNotify').value===false ){
    formdata.append('taskNotify','false');
   }
   else{
     console.log("in the else part")
      // this.calender.createCalendar('MyCalendar').then(
      //   (msg) => {
      //     console.log("In the calnder not error")
      //     console.log(msg);
      //   },
      //   (err) => {
      //     console.log("In the calnder error"), console.log(err);
      //   }
      // );
      let dateDetails:any=new Date(this.editForm.get('taskDate').value)
       let year=dateDetails.getFullYear();
       let month=dateDetails.getMonth();
       let day=dateDetails.getDate();
       console.log("year"+year+"Month"+month+"dat"+day);
       let timedetails=this.editForm.get('taskStartTime').value;
       console.log("Mpnth is "+month);
       console.log(timedetails);
    
       let split1=timedetails.split('T')[1];
      let split2=split1.split('.')[0];
      let hours=split2.split(':')[0];
      let minutes=split2.split(':')[1];
    
    
      console.log("minutes  "+minutes+"  huours"+hours);

      var startDate = new Date(year, month, day, hours, minutes, 0, 0); // caution!!: month 0 = january, 11 = december
     
     
     let dateDetails2=new Date(this.editForm.get('taskEndDate').value)
       let year2=dateDetails2.getFullYear();
      let month2=dateDetails2.getMonth();
       let day2=dateDetails2.getDate();
      console.log("year"+year2+"Month"+month2+"dat"+day2);
       timedetails=this.editForm.get('taskEndTime').value;
    
    split1=timedetails.split('T')[1];
    split2=split1.split('.')[0];
    hours=split2.split(':')[0];
    minutes=split2.split(':')[1];

     console.log("time is "+hours+"vajun "+minutes)
     
     var endDate = new Date(year2, month2, day2, hours, minutes, 0, 0); // caution!!: month 0 = january, 11 = december
     
  
       var title = this.notifyTitle;
       var mylocation = "Private";
       var notes = this.notifyNotes;
       this.calender.createEvent(title, mylocation, notes, startDate, endDate);
    formdata.append('taskNotify',this.editForm.get('taskNotify').value);

   }
formdata.append('taskName',this.editForm.get('taskName').value);
formdata.append('taskDescription',this.editForm.get('taskDescription').value);
formdata.append('taskDate',this.editForm.get('taskDate').value);
formdata.append('fav',this.editForm.get('fav').value);
formdata.append('taskEndDate',this.editForm.get('taskEndDate').value);
formdata.append('taskStartTime',this.editForm.get('taskStartTime').value);
formdata.append('taskEndTime',this.editForm.get('taskEndTime').value);

this.http.updateDetails(formdata,this.oldTaskName).subscribe((result: any) => {
 
  
  this.route.navigate(['../../task',this.route1.snapshot.paramMap.get('userName')],{relativeTo:this.route1}).then(() => window.location.reload());
   console.log(result);
 
}, (err) => {
  console.log(err);
})


  }

  async getFromNotify(data) {
    console.log(data);
      this.notifyNotes=data.name2;
    this.notifyTitle=data.name1
  
  }
  onNotify(){
   if(this.editForm.get('taskNotify').value===false || this.editForm.get('taskNotify').value===null){
    this.myAlert_show()
   };
  }
//Add Notification Info
async myAlert_show() {
  const myAlert = await this.alertController.create({
    header: 'Notification',
    message:'Description' ,
    buttons: [
      {
        text: 'OK',
        handler: data => {
          this.getFromNotify(data);
        },

      },
      {
        text: 'Cancel',
        role: "cancel",
        handler: data => {
          //console.log('Abbrechen clicked. Data -> ' + JSON.stringify(data));
        },

      }
    ],
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Enter Title of Notification'
      },
      {
        name: 'name2',
        type: 'text',
        placeholder: 'Notes to Show'
      },
     
    ]
  });
  await myAlert.present();
}


}
