import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  // cList:any

  myCourseList:any

  constructor(private mconfig:ConfigService) { }

  ngOnInit(): void {
    this.mconfig.getCourseList().subscribe(
      (sdata)=>{
  //  console.log(sdata)
  this.myCourseList=sdata
    });
  }

}
