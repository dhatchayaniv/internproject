import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RingComponent } from './ring/ring.component';
import { AeroplaneComponent } from './aeroplane/aeroplane.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DragonComponent } from './dragon/dragon.component';
import { BunnyComponent } from './bunny/bunny.component';
import { VeggieComponent } from './veggie/veggie.component';
import { PuppyComponent } from './puppy/puppy.component';
import { BeadComponent } from './bead/bead.component';
import { RideComponent } from './ride/ride.component';
import { MusicComponent } from './music/music.component';
import { RobotComponent } from './robot/robot.component';
import { CatComponent } from './cat/cat.component';
import { TrainComponent } from './train/train.component';
import { ShapesComponent } from './shapes/shapes.component';
import { WoodtoyComponent } from './woodtoy/woodtoy.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RingComponent,
    AeroplaneComponent,
    KitchenComponent,
    DragonComponent,
    BunnyComponent,
    VeggieComponent,
    PuppyComponent,
    BeadComponent,
    RideComponent,
    MusicComponent,
    RobotComponent,
    CatComponent,
    TrainComponent,
    ShapesComponent,
    WoodtoyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
