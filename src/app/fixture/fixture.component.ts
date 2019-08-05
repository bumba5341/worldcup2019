import { Component, OnInit } from '@angular/core';
import{Fixture} from '../fixureType';
import {Details} from '../fixture-details';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {


  Fix_detail=Details;
  constructor() { }

  ngOnInit() {
  }

}
