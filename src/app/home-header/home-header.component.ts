import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  video1: string = " ";
  logoBanner: string = "";
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  muted: boolean = false;

  ngOnInit() {
    this.video1 = "../../assets/videos/video1.mp4";
    this.logoBanner = "../../assets/icon/logo_tumission/Tumission-IconoColor.png"
  }

  toggleMute(): void {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
    if (this.muted) {
      this.muted = false;
    } else if (!this.muted) {
      this.muted = true;
    }
  }

  
}
