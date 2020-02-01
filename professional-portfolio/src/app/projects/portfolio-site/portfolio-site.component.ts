import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-site',
  templateUrl: './portfolio-site.component.html',
  styleUrls: ['./portfolio-site.component.css']
})
export class PortfolioSiteComponent implements OnInit {
  firstLoad:boolean = true;
  constructor() { }

  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }
}
