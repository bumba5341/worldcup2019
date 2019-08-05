import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-srilanka',
  templateUrl: './srilanka.component.html',
  styleUrls: ['./srilanka.component.css']
})
export class SrilankaComponent implements OnInit {

  constructor(
    private route :ActivatedRoute,
    private router :Router
  ) { }

  ngOnInit() {

    
    let id =this.route.snapshot.paramMap.get('name');

    if(id=='Australia')
    this.router.navigate(['australia']);
   else if(id=='India')
    this.router.navigate(['india']);
    else if(id=='New Zeland')
    this.router.navigate(['new-zeland']);
    else if(id=='Bangladesh')
    this.router.navigate(['bangladesh'])
    else if(id=='West Indies')
    this.router.navigate(['west-indies']);
    else if(id=='Srilanka')
    this.router.navigate(['srilanka']);
    else if(id=='Pakistan')
    this.router.navigate(['pakistan']);
    else if(id=='Afghanistan')
    this.router.navigate(['afganistan']);
    else if(id=='England')
    this.router.navigate(['england']);
    else if(id=='South Africa')
    this.router.navigate(['south-africa'])
  }

}
