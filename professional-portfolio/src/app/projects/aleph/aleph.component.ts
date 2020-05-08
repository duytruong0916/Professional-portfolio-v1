import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleph',
  templateUrl: './aleph.component.html',
  styleUrls: ['./aleph.component.css']
})
export class AlephComponent implements OnInit {
  firstLoad:boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
