import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
langs=['Telugu','English','Hindi','Kannada'];
  constructor() { }

  ngOnInit(): void {
  }
  getFormsValue(fvalue:any){
    console.log(fvalue)
  }
}
