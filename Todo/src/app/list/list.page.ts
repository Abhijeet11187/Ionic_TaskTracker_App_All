import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../shared/httpservice.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
userName;
 tasks;
  
  constructor(private http:HttpserviceService) {
   
  }

  ngOnInit() {
this.userName=localStorage.getItem('userName');
console.log(this.userName);
this.http.getTasks(this.userName).subscribe((res: any) => {
  // console.log(res);
  this.tasks = res.message.tasks;
}, (err) => {
  console.log(err);
})
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
