import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
state=['Andhra Pradesh','Karnataka','Telangana'];

 myform :FormGroup = new FormGroup ({
   email :new FormControl('',[Validators.required,Validators.email,Validators.minLength(8)]),
   password : new FormControl('',[Validators.required,Validators.minLength(6)]),
   address :new FormControl('',Validators.required),
   city : new FormControl('',Validators.required)
 })

  constructor() { }

  ngOnInit(): void {
  }
   getValues(){
    console.log(this.myform)
   }
}
