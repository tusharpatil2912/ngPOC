import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDoTasks =['first to do','second todo', 'third todo'];
  inprocTasks =['first inproc','second inproc', 'third inproc','fourth inproc'];
  compltTasks =['first completed','2nd cmpltd','3rd cmpltd'];

}
