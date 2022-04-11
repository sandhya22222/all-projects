import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myDilog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
     
    const dilogref= this.myDilog
    .open( ContactFormComponent,{
      height:'500px',
      width:'500px',
      disableClose:true
    });
     
   dilogref.afterClosed().subscribe(result => {
     console.log(`Dialog result ${result}`);
   })

  }
}
