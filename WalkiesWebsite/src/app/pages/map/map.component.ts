import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

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

  constructor() {

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

    this.map.resize()
  }
}
