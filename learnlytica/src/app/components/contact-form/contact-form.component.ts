import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 myform :FormGroup = new FormGroup ({
   email :new FormControl('',[Validators.required,Validators.email]),
   password : new FormControl(),
   address :new FormControl(),
   city : new FormControl()
 })

  constructor() { }

  ngOnInit(): void {
  }
   getValues(){
    alert(1)
   }
}
