import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-details',
  templateUrl: './artists-details.component.html',
  inputs: ['artist']
})
export class ArtistsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
