import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  userList: any;
  userList$: any;
  getProfiles$: any;

  constructor(private support:UsersService) { }

  ngOnInit(): void {

    this.support.getProfiles().subscribe((result: any) => {
      this.userList = result
      console.log(result)
    })

     this.userList$ = this.support.getProfiles
  }


}
