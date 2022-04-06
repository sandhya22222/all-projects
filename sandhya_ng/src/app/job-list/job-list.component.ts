import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  array=['one'];
  profile=[{
    name:'sandy',
    age:2022,
    doj:2021
  }];
  jobrole=["Marketing"];
  constructor() { }

  ngOnInit(): void {
  }

}
