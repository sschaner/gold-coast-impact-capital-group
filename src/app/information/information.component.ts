import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Information } from "./information.model";
import { InformationService } from "./information.service";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"],
})
export class InformationComponent implements OnInit {
  videos: Information[];
  subcription: Subscription;

  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.subcription = this.informationService.informationChanged.subscribe(
      (videos: Information[]) => {
        this.videos = videos;
      }
    );
    this.videos = this.informationService.getVideos();
  }

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
    this.subcription.unsubscribe();
  }
}
