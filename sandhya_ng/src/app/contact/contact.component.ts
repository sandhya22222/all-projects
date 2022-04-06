import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    
  @Output() configUpdated = new EventEmitter();

  // @Input() labels:any;
  // @Input() details:any;
  constructor() { }

  ngOnInit(): void {
    // alert(this.labels)
    // alert(this.details)
    this.configUpdated.emit({
      courseName:'MEAN',
      started_date: '15/3/2022'
    })
  }

}
