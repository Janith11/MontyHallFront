import { NgModule } from '@angular/core';
import { RouterModule, Routes, defaultUrlMatcher } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimulationComponent } from './simulation/simulation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'simulation', component:SimulationComponent},
  //{path:defaultUrlMatcher,component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
