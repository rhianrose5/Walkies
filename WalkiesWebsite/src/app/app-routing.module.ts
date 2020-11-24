import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/map.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
