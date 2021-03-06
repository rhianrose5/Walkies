import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { WalksService } from './services/walk.service';
import { WalkingroutesComponent } from './pages/walkingroutes/walkingroutes.component';
import { FacilitiesService } from './services/facility.service';
import { PhotosService } from './services/photo.service';
import { CommentsService } from './services/comment.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    WalkingroutesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WalksService, FacilitiesService, PhotosService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: HttpClient) {
  }
}
