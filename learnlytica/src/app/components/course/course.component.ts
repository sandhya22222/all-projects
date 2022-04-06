import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseTitle='Git for biggners';

  courseDate=new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
