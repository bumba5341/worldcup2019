import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  
  Team :any[]=[
    {img:"./assets/flag/indian_flag.png",name:"India"},
    {img:"assets/flag/Australia-Flag.png",name:"Australia"},
    {img:"assets/flag/new-zeland.jpg",name:'New Zeland'},
    {img:"assets/flag/south-africa.png",name:'SouthAfrica'},
    {img:"assets/flag/West_indies.png",name:'West Indies'},
    {img:"assets/flag/Sri_Lanka.png",name:'Srilanka'},
    {img:"assets/flag/bangladesh.png",name:'Bangladesh'},
    {img:"assets/flag/Pakistan.png",name:'Pakistan'},
    {img:"assets/flag/afghanistan.png",name:'Afghanistan'},
    {img:"assets/flag/england.png",name:'England'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
