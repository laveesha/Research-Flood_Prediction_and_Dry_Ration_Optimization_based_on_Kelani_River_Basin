/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core'
import { } from 'googlemaps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild('gmap') gmapElement:any;
  map:google.maps.Map;

  latitude:any;
  longitude :any;

  isHidden=false;
 // constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    let mapProperty={
        zoom: 2,
        center: new google.maps.LatLng(2.8,-187.3),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    this.map=new google.maps.Map(this.gmapElement.nativeElement,mapProperty);
  }


setMapType(mapTypeId: string) {
  this.map.setMapTypeId(mapTypeId)
}

setCenter() {
  this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

  let location = new google.maps.LatLng(this.latitude, this.longitude);

  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    title: 'Got you!'
  });

  marker.addListener('click', this.simpleMarkerHandler);

  marker.addListener('click', () => {
    this.markerHandler(marker);
  });
}

simpleMarkerHandler() {
  alert('Simple Component\'s function...');
}

markerHandler(marker: google.maps.Marker) {
  alert('Marker\'s Title: ' + marker.getTitle());
}

}