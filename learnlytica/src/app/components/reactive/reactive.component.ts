import { Component, OnInit } from '@angular/core';
import { from, interval, last, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myObs$: Subscription | undefined;
  myObs2$: any;
  constructor() { }

  ngOnInit(): void {
    // this.myObs$ = interval(1000).subscribe(val => 
    //console.log(`I am obs stream value -> ${val}`));

    this.myObs2$ = of(1, 2, 4, 5, 10, 100);

    this.myObs2$.subscribe(
      (val: Number) => console.log(`I am from --> obs stream value -> ${val}`)
    )

    from([1, 10, 2, 20]).subscribe(
      (val: Number) => console.log(`I am from obs stream value -> ${val}`)
    )
    const obsT1 = interval(1000);
    const onlyFirstTen = obsT1.pipe(
      take(6),
      map(v => v*10),
      // last()
    );

  }

}

function ngOnDestroy() {
  throw new Error('Function not implemented.');
}
// ngOnDestroy(): void{
//   console.log('from destroy');

//   this.myObs$.unsubscribe();

//   this.myObs2$.unsubscribe();
// }


