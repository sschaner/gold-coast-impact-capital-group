import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { Information } from "./information.model";
import { DataStorageService } from "../shared/data-storage.service";
import { InformationService } from "./information.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"],
})
export class InformationComponent implements OnInit {
  submitted = false;
  videos: Information[];
  subcription: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private informationService: InformationService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.subcription = this.informationService.informationChanged.subscribe(
      (videos: Information[]) => {
        this.videos = videos;
      }
    );
    this.dataStorageService.fetchVideos().subscribe();
    this.videos = this.informationService.getVideos();
  }

  ngAfterViewInit() {
    document.querySelector("body").classList.add("background-other");
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.informationService.addVideo(value);
    this.dataStorageService.storeVideos();
    form.reset();
    this.submitted = true;
  }

  ngOnDestroy() {
    document.querySelector("body").classList.remove("background-other");
    this.subcription.unsubscribe();
  }
}
