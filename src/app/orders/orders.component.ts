import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  readonly defaultCoords = {
    latitude: 50.44547796610495,
    longitude: 30.52999261858963,
  };

  location = null;
  zoom = 11;

  geocoder = null;


  constructor() {
  }

  ngOnInit() {
  }

  onChooseLoc(event) {
    this.location = {
      latitude: event.coords.lat,
      longitude: event.coords.lng,
    };
    console.log(event);
  }

}
