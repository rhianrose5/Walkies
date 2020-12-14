import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { WalkingroutesComponent } from './pages/walkingroutes/walkingroutes.component';


const routes: Routes = [
  {
    path: '',
    component: MapComponent
    //Anyone can view this page, so doesn't need to be authorised
    //Specific components with the html will be specified
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'walkingroutes/:walkname',
    component: WalkingroutesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
