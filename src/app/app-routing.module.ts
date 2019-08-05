import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FixtureComponent} from './fixture/fixture.component';
import {GroundComponent} from './ground/ground.component';
import{TeamComponent}from './team/team.component';
import{AustraliaComponent} from './team/australia/australia.component';
import{SrilankaComponent} from './team/srilanka/srilanka.component';
import{IndiaComponent} from './team/india/india.component';
import{NewZelandComponent} from './team/new-zeland/new-zeland.component';
import{EnglandComponent} from './team/england/england.component';
import{BangladeshComponent} from './team/bangladesh/bangladesh.component';
import {PakistanComponent} from './team/pakistan/pakistan.component';
import{SouthAfricaComponent} from './team/south-africa/south-africa.component';
import {Srilanka1Component} from './team/srilanka1/srilanka1.component';
import {AfganistanComponent} from './team/afganistan/afganistan.component';
import {WestIndiesComponent} from './team/west-indies/west-indies.component'


const routes: Routes = [
  {path:'fixture',component:FixtureComponent},
  {path:'ground',component:GroundComponent},
  {path:'teams',component:TeamComponent,
    
  //  children :[
    //  { path:'squad/:name',component:SrilankaComponent}
    //]  
  },
  {path:'squad/:name',component:SrilankaComponent},
  {path:'australia',component:AustraliaComponent},
  {path:'india',component:IndiaComponent},
  {path:'new-zeland',component:NewZelandComponent},
  {path:'bangladesh',component:BangladeshComponent},
  {path:'west-indies',component:WestIndiesComponent},
  {path:'srilanka',component:Srilanka1Component},
  {path:'pakistan',component:PakistanComponent},
  {path:'afganistan',component:AfganistanComponent},
  {path:'england',component:EnglandComponent},
  {path:'south-africa',component:SouthAfricaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
