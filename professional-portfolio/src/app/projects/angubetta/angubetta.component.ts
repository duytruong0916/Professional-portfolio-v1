import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angubetta',
  templateUrl: './angubetta.component.html',
  styleUrls: ['./angubetta.component.css']
})
export class AngubettaComponent implements OnInit {

  firstLoad:boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
