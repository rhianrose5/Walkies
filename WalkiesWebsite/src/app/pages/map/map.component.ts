import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/rhianrose5/ckhvw0bkg0cwt19o1yz3nz0e7';
  lat = 50.614814;
  lng = -3.412887;
  photos: any;
  loading = true;
  commentDate: string;

  constructor() {

  }

  ngOnInit() {
    //Replace hard code key with environment variable later
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set("pk.eyJ1IjoicmhpYW5yb3NlNSIsImEiOiJja2h2dzZjc2EweWtiMnNwNTE1M3doMzh2In0.q2Dr4ATPtHLaQ5uRzc1Jcg");

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 10,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.resize()
  }
}
