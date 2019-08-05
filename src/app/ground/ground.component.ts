import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.css']
})
export class GroundComponent implements OnInit {

  
  Venue :any[]=[
    {ground:'./assets/ground/The-Oval.jpg',name:'Kennington Oval ,London'},
    {ground:'./assets/ground/Trent-Bridge-Image.png',name:'Trent Bridge , Nottingham'},
    {ground:'./assets/ground/County_ground.jpg',name:'County Ground ,Bristol'},
    {ground:'./assets/ground/The-Rose-Bowl.jpg',name:'The Rose Bowl , Southampton'},
    {ground:'./assets/ground/cooper.jpg',name:'The Cooper Associates County Ground ,Taunton'},
    {ground:'./assets/ground/manchester.jpg',name:'Emirates Old Trafford , Manchester'},
    {ground:'./assets/ground/edgbaston.jpg',name:'Edgbaston ,Birmingham'},
    {ground:'./assets/ground/Headingley.png',name:'Headingley ,Leeds'},
    {ground:'./assets/ground/Lords.jpg',name:'Lord\'s\ ,London'},
    {ground:'./assets/ground/Riverside-ground.jpg',name:'Riverside Ground , Chester-le-Street'},
    {ground:'./assets/ground/Sophia-Gardens.jpg',name:'Sophia Gardens ,Cardiff'}
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
