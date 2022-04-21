import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  // cList:any

  userList: any;
  myCourseList: any

  constructor(private mconfig: ConfigService, private profile: UserService) { }

  ngOnInit(): void {
    this.mconfig.getCourseList().subscribe(
      (sdata) => {
        //  console.log(sdata)
        this.myCourseList = sdata
      });

    this.profile.getProfiles().subscribe((result: any) => {
      this.userList = result
      console.log(result)
    })
  }

}
