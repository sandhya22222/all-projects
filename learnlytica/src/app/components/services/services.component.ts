import { Component, OnInit, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data = 'THBS';

  constructor() {
    console.log(`new - data is ${this.data}`);
  }
  ngOnChanges(changes: SimpleChange) {
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${this.data}`);
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngContentChecked() {
    console.log("ngContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
