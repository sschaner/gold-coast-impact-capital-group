export class Information {
  public videoTitle: string;
  public videoDescription: string;
  public videoURL: string;

  constructor(videoTitle: string, videoDescription: string, videoURL: string) {
    this.videoTitle = videoTitle;
    this.videoDescription = videoDescription;
    this.videoURL = videoURL;
  }
}
