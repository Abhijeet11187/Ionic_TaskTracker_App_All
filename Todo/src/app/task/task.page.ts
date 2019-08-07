import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ActionSheetController } from '@ionic/angular';
import { HttpserviceService } from '../shared/httpservice.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  alrtData: FormData;
  userName;
  public startDate: Date;
  tasks: [];
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  onAdd() {
    this.myAlert_show();
  }

  //constructor
  constructor(public loadingController: LoadingController,public menuCtrl: MenuController, private router:ActivatedRoute,public actionSheetController: ActionSheetController, private alertController: AlertController, private http: HttpserviceService, private fb: FormBuilder, private actiRouter: ActivatedRoute, private route: Router) { }

//Wait 
async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: "lines-small",
    duration: 600,
    message: 'Please wait...',
    showBackdrop:true,
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}
  ngOnInit() {
    this.presentLoadingWithOptions();
    //get Acctual Users Data By Populate
    //this.flashlight.switchOn();
    this.userName = this.actiRouter.snapshot.paramMap.get('userName');
    console.log("In  the task with userName : ", this.userName);
    localStorage.setItem('userName',this.userName);
    this.http.getTasks(this.userName).subscribe((res: any) => {
      // console.log(res);
      this.tasks = res.message.tasks;
      this.tasks.map(task => {
        console.log(task)
      })
    }, (err) => {
      console.log(err);
    })



  }

  //Calender

  // getCal() {
  //   this.calender.createCalendar('MyCalendar').then(
  //     (msg) => {
  //       console.log("In the calnder not error")
  //       console.log(msg);
  //     },
  //     (err) => {
  //       console.log("In the calnder error"), console.log(err);
  //     }
  //   );
   
  //   var startDate = new Date(2019, 6, 29, 18, 30, 0, 0); // caution!!: month 0 = january, 11 = december
  //   var endDate = new Date(2019, 6, 30, 19, 30, 0, 0);
  //   var title = "My school event";
  //   var mylocation = "school";
  //   var notes = "Some notes about this event.";
    
  //   this.calender.createEvent(title, mylocation, notes, startDate, endDate);



  // }


  // Ge Data From Alert

  getFromAlert(data) {
    console.log(data);
    // console.log(this.tasks[0]);
    const formData = new FormData();
    formData.append('taskName', data.name1);
    formData.append('taskDescription', data.name2);
    formData.append('taskDate', data.name3);
    formData.append('fav', 'false');
    this.http.registerTask(formData, this.userName).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }

  // three dots select
  onCardSelect(task) {
    this.presentActionSheet(task);
  }

  //Alert Function

  async myAlert_show() {
    const myAlert = await this.alertController.create({
      header: 'Add Taks',
      message: this.userName,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.getFromAlert(data);
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
          placeholder: 'Enter Name of Task'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Description'
        },
        {
          name: 'name3',
          type: 'date',
          placeholder: 'Date',
          min: '26-07-19',
          max: '20-01-20'
        },
      ]
    });
    await myAlert.present();
  }

  //Favourite

  selectFavourite(task) {
    task.fav = !task.fav;
    console.log(task.fav);
    let formdata = new FormData();
    formdata.append('fav', task.fav);
    this.http.updateColr(task.taskName, formdata).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  //Go to details navigate to another page

  getDescription(task) {
    this.route.navigate(['/details'])
    localStorage.setItem('task', JSON.stringify(task))
  }



  //Edit Task
  onEdit(task, oldtaskName) {
    this.route.navigate(['/edit-more',this.router.snapshot.paramMap.get('userName')])
    //console.log(task);
    localStorage.setItem('task',JSON.stringify(task));
  }

  //Delete Task

  deleteTask(task) {
    console.log("in delete" + task);
    this.ngOnInit();
    this.http.deleteTask(task).subscribe((result) => {
      //console.log(result);

    }, (error) => {
      console.log(error);
    })
  }

  //Update Task
  updateTask(data, oldtaskName) {
    console.log(data);
    const formData = new FormData();
    formData.append('taskName', data.name1);
    formData.append('taskDescription', data.name2);
    formData.append('taskDate', data.name3);

    this.http.updateT(formData, oldtaskName).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });

  }

//Task Completed

onComplete(task){
let fav={"a":"a"};
  this.http.taskCompleted(task.taskName,fav).subscribe((result) => {
    console.log(result);
    this.ngOnInit();
  }, (error) => {
    console.log(error);
  });
}



  //Action Listener


  async presentActionSheet(task) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteTask(task.taskName);
        }
      },
      {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.onEdit(task, task.taskName);
        }
      },
      {
        text: 'Task Complete',
        icon: 'checkmark-circle',
        handler: () => {
         this.onComplete(task);
        }
      },
      {
        text: 'Task Description',
        icon: 'information-circle-outline',
        handler: () => {
          this.justShow(task)
          // this.showDetails(task) ;
        }
      },
      {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          this.selectFavourite(task);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

  //Edit the Task

  // async myAlert_Edit(task, oldtaskName) {
  //   const myAlert = await this.alertController.create({
  //     header: 'Add Taks',
  //     message: this.userName,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           this.updateTask(data, oldtaskName);
  //         },

  //       },
  //       {
  //         text: 'Cancel',
  //         role: "cancel",
  //         handler: data => {
  //           //console.log('Abbrechen clicked. Data -> ' + JSON.stringify(data));
  //         },

  //       }
  //     ],
  //     inputs: [
  //       {
  //         name: 'name1',
  //         type: 'text',
  //         value: task.taskName
  //       },
  //       {
  //         name: 'name2',
  //         type: 'text',
  //         value: task.taskDescription
  //       },
  //       {
  //         name: 'name3',
  //         type: 'date',
  //         value: task.taskDate
  //       },
  //     ]
  //   });
  //   await myAlert.present();
  // }

  //Details show


  async justShow(task) {
    const myAlert = await this.alertController.create({
      header: task.taskName,
      message: task.taskDescription,
      buttons: [

        {
          text: 'Cancel',
          role: "cancel",
          handler: data => {
            //console.log('Abbrechen clicked. Data -> ' + JSON.stringify(data));
          },

        }
      ],  



    });
    await myAlert.present();
  }



//Trial
onTrial(){
  console.log("On trial");
 // this.backlight.on().then(() => console.log('backlight on'));
}
btn(){  
  console.log("hie");
  
}
}
