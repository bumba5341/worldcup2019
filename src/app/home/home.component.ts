import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
 // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

 imageObject: Array<object>=[
   { image: 'assets/slider/wc.jpg',
   thumbImage:'assets/slider/wc1.jpg',
   alt: 'alt of image',},
   { image: 'assets/slider/england.jpg',}

 ];

  constructor() { }

  ngOnInit() {

    
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }

}
