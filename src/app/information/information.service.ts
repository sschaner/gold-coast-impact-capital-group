import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Information } from "./information.model";

@Injectable()
export class InformationService {
  informationChanged = new Subject<Information[]>();

  private videos: Information[] = [
    new Information(
      "Benefits of Apartment Investing",
      "Apartment investing is a great way to get resisual income",
      "https://www.youtube.com/embed/cfK3l8hGaOI"
    ),
    new Information(
      "Take a Detailed Look at the Silent 55",
      "You can take a walkthrough of the Silent 55 to see the future of ecofriendly sea travel",
      "https://www.youtube.com/embed/-NxG0Fkk3AI"
    ),
  ];

  // private videos: Information[] = [];

  constructor() {}

  setVideos(videos: Information[]) {
    this.videos = videos;
    this.informationChanged.next(this.videos.slice());
  }

  getVideos() {
    return this.videos.slice();
  }

  getVideo(index: number) {
    return this.videos[index];
  }

  addVideo(video: Information) {
    this.videos.push(video);
    this.informationChanged.next(this.videos.slice());
  }

  updateVideo(index: number, newVideo: Information) {
    this.videos[index] = newVideo;
    this.informationChanged.next(this.videos.slice());
  }

  deleteVideo(index: number) {
    this.videos.slice(index, 1);
    this.informationChanged.next(this.videos.slice());
  }
}
