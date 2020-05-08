import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrumstubs',
  templateUrl: './scrumstubs.component.html',
  styleUrls: ['./scrumstubs.component.css']
})
export class ScrumstubsComponent implements OnInit {
  firstLoad:boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }
}
