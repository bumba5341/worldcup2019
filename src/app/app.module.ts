import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigasionBarComponent } from './navigasion-bar/navigasion-bar.component';
import { FixtureComponent } from './fixture/fixture.component';
import { GroundComponent } from './ground/ground.component';
import { TeamComponent } from './team/team.component';
import { AfganistanComponent } from './team/afganistan/afganistan.component';
import { AustraliaComponent } from './team/australia/australia.component';
import { BangladeshComponent } from './team/bangladesh/bangladesh.component';
import { EnglandComponent } from './team/england/england.component';
import { IndiaComponent } from './team/india/india.component';
import { NewZelandComponent } from './team/new-zeland/new-zeland.component';
import { PakistanComponent } from './team/pakistan/pakistan.component';
import { SouthAfricaComponent } from './team/south-africa/south-africa.component';
import { SrilankaComponent } from './team/srilanka/srilanka.component';
import { Srilanka1Component } from './team/srilanka1/srilanka1.component';
import { WestIndiesComponent } from './team/west-indies/west-indies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigasionBarComponent,
    FixtureComponent,
    GroundComponent,
    TeamComponent,
    AfganistanComponent,
    AustraliaComponent,
    BangladeshComponent,
    EnglandComponent,
    IndiaComponent,
    NewZelandComponent,
    PakistanComponent,
    SouthAfricaComponent,
    SrilankaComponent,
    Srilanka1Component,
    WestIndiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
