import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storing-app',
  templateUrl: './storing-app.component.html',
  styleUrls: ['./storing-app.component.css']
})
export class StoringAppComponent implements OnInit {
  firstLoad:boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }
}
