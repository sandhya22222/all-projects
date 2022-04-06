import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 listItem =[{
   title:'Mangos',
   content:'All type of mangoes available here and pure $Organic$',
   btnText:'Buy Now!',
   image:'https://thumbs.dreamstime.com/b/mango-ripe-white-background-35283521.jpg',
   link:'https://www.bigbasket.com/'
 },
 {
  title:'Grapes',
  content:'Black grapes only available and pure $Organic$ ',
  btnText:'Buy Now!',
  image:'https://www.pngfind.com/pngs/m/622-6226852_carolina-black-rose-grape-hd-png-download.png',
   link:'https://www.bigbasket.com/'
},
{
  title:'Custard Apple',
  content:'This fruits are oraganic fruits',
  btnText:'Buy Now!',
  image:'https://naturesdelight.in/wp-content/uploads/2018/06/sitaphal-fruit-500x500.jpg',
  link:'https://www.bigbasket.com/'
},
];
  constructor() { }

  ngOnInit(): void {
  }

}
