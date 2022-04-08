import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input () imgid:any
  @Input() configs:any
 imgUrl:any

  courseTitle='Git for biggners';

  courseDate=new Date()
  constructor(private myConfig:ConfigService) { }

  ngOnInit(): void {
this.imgUrl=`https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`

    // this.myConfig.getCourseConfigs().subscribe(
    //   (data) => {
    //     console.log(data)
    //   }
    // );
  }

}
