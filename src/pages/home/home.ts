import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClinicasProvider } from '../../providers/clinicas/clinicas';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map;

  constructor(
    public navCtrl: NavController, 
    public clinicasProvider: ClinicasProvider
    ) {
 


  }



  ionViewDidLoad() {
    this.map = this.createMap(this.mapElement);

    let marker = this.addMarker( -6.361395273489808, -39.294457502465754);
    marker.setMap(this.map);
  }

  createMap(mapElement) {
    if(mapElement !== null && this.mapElement.nativeElement !== null && google) {
      let options = {
        zoom: 15,
        center: {lat: -6.3613952734898085, lng: -39.294457502465754}
      }
      return new google.maps.Map(mapElement.nativeElement, options);
    }

    return undefined;
  }

  addMarker(lat, lng) {
    return new google.maps.Marker({
      position: {lat: lat, lng: lng},
      icon: new google.maps.MarkerImage(
        'https://mt.google.com/vt/icon?psize=16&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1&text=I'
      )
    })
  }

}