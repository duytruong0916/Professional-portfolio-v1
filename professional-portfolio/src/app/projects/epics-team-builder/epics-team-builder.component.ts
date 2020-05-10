import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-epics-team-builder",
  templateUrl: "./epics-team-builder.component.html",
  styleUrls: ["./epics-team-builder.component.css"],
})
export class EpicsTeamBuilderComponent implements OnInit {
  firstLoad: boolean = true;
  constructor() {}

  ngOnInit() {
    if (this.firstLoad) {
      window.scroll(0, 0);
      this.firstLoad = false;
    }
  }
}
