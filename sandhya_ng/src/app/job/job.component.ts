import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
@Input() labels:any;
@Input() details:any;
@Input() roles:any;

@Output() jobRoles =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
