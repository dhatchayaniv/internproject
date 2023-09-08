import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
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


const routes: Routes = [
 { path:'',loadChildren: ()=>import('./public/public.module').then((m)=>
 m.PublicModule),},


 { path:'admin',loadChildren: ()=>import('./admin/admin.module').then((m)=>
 m.AdminModule),},


 {
  path: 'login',
  component:LoginComponent,
 },

 {
  path: 'ring',
  component:RingComponent,
 },

 {
  path:'aeroplane',
  component: AeroplaneComponent,
 },

 {
  path:'kitchen',
  component:KitchenComponent,

 },
 {
  path:'dragon',
  component:DragonComponent,
 },
 {
  path:'bunny',
  component:BunnyComponent,
 },
 {
  path:'veggie',
  component:VeggieComponent,
 },
 {
  path:'puppy',
  component:PuppyComponent,
 },
 {
  path:'bead',
  component:BeadComponent,
 },
{
  path:'ride',
  component:RideComponent,
},
{
  path:'music',
  component:MusicComponent,
},
{
  path:'robot',
  component:RobotComponent,
},
{
  path:'cat',
  component:CatComponent
},
{
  path:'train',
  component:TrainComponent,
},
{
    path:'shapes',
    component:ShapesComponent,
},
{
  path:'woodtoy',
  component:WoodtoyComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
