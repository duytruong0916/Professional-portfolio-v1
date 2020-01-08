import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timefoxwatch',
  templateUrl: './timefoxwatch.component.html',
  styleUrls: ['./timefoxwatch.component.css']
})
export class TimefoxwatchComponent implements OnInit {

  firstLoad:boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }
}
