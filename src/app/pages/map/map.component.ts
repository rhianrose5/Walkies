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
      zoom: 7.5,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.resize();

    //Set the walks map pins 
    var mapPins = this._walksService.getAll()
      .subscribe(walks => {
        this.loading = false;
        this.walks = walks;

        this.walks.forEach((feature) => {
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
            walkId: feature.walkId,
            walkName: feature.walkName,
            latitude: feature.latitude,
            longitude: feature.longitude,
            marker
          });

          markersArray.forEach((mark) => {
            new mapboxgl.Marker(el)
              .setLngLat(new mapboxgl.LngLat(mark.longitude, mark.latitude))
              .setPopup(new mapboxgl.Popup({ closeOnClick: true })
                .setHTML('<head><link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></head><p style="font-family:Gloria Hallelujah, cursive;"><a style="text-decoration:none; color:black; font-size:25px;" href="http://localhost:4200//walkingroutes/' + mark.walkName + '">' + mark.walkName + '</a></p>'))
              //.setHTML('<head><link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></head><p style="font-family:Gloria Hallelujah, cursive;"><a style="text-decoration:none; color:black; font-size:25px;" href="https://walkies-app.herokuapp.com/walkingroutes/' + mark.walkName + '">' + mark.walkName + '</a></p>'))
              .addTo(this.map);
          });
        });
      });

    let markersArray = [];
  }
}
