import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimulationComponent } from './simulation/simulation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'simulation', component:SimulationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
