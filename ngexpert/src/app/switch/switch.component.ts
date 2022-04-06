import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  person = [{
    "name": "Sandhya",
    "age": 22,
    "country": 'IND'
  },
  {
    "name": "Phani",
    "age": 22,
    "country": 'USA'
  },
  {
    "name": "Sindhu",
    "age": 22,
    "country": 'Asia'
  },
  {
    "name": "Nandu",
    "age": 22,
    "country": 'Eurap'
  },
  ];


  getColors(code: string) {
    switch (code) {
      case 'IND':
        return 'blue';
        break;

      case 'USA':
        return 'Dark Green';
        break;

      default:
        return 'red';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
