import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { IWalks } from '../../models/walk';
import { WalksService } from '../../services/walk.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/rhianrose5/ckhxsuyww03vo19mqpm2vch0p';
  lat = 50.614814;
  lng = -3.412887;
  loading = true;

  walks: IWalks[] = [];

  constructor(private _walksService: WalksService) {
    this._walksService.getAll()
      .subscribe(walks => {
        this.loading = false;
        this.walks = walks;
      });
  }

  ngOnInit() {
    //Replace hard code key with environment variable later
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set("pk.eyJ1IjoicmhpYW5yb3NlNSIsImEiOiJjazdmNDg5MzEwYnR4M2VvOHc2OGpqdjgzIn0.qVx4-bXWKU8_IudFGFsKeA");

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.resize();

    //Set the walks map pins 
    /*var mapPins = this._walksService.getAll()
      .subscribe(walks => {
        this.loading = false;
        this.walks = walks;

        this.walks.features.forEach((feature) => {
          var el = document.createElement('div');
          el.style.backgroundImage = 'url(https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png)';
          el.style.backgroundSize = 'cover';
          el.style.height = '25px';
          el.style.width = '25px';
          el.className = 'marker';

          let marker = new mapboxgl.Marker({
            element: el,
            anchor: "top"
          })

          markersArray.push({
            photoId: feature.properties.PhotoId,
            photoName: feature.properties.PhotoName,
            photo: feature.properties.Photo,
            coordinates: feature.geometry.coordinates,
            marker
          });

          markersArray.forEach((mark) => {
            new mapboxgl.Marker(el)
              .setLngLat(new mapboxgl.LngLat(mark.coordinates[0], mark.coordinates[1]))
              .setPopup(new mapboxgl.Popup({ closeOnClick: true })
                //only handling jpeg
                .setHTML('<h3>' + mark.photoName + '</h3><img src="data:image/jpeg;base64,' + mark.photo + '" width="200" height="200"></img>'))
              //.setHTML('<h3>' + mark.photoName + '</h3><img src="data:image/jpeg;base64,' + mark.photo + '" width="200" height="200"></img> <form [formGroup]="commentForm" (ng-click)="onCommentSubmit()"> <div class="form-group" id="comment-box"> <label for="comment">Comment:</label> <textarea class="form-control" formControlName="comment" rows="3" id="comment"></textarea> </div> <br> <div class="form-group" id="comment-box"> <button type="submit" class="btn btn-dark">Submit</button> <a class="btn btn-link" id="commentMessage"></a> </div> </form>'))
              .addTo(this.map);
          });


        });
      });*/

    let markersArray = [];
  }
}
