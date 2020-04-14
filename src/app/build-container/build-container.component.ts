import { Component, Input, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlersComponent } from './controlers/controlers.component';
import { LoaderService } from '../shared/loader.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-build-container',
  templateUrl: './build-container.component.html',
  styleUrls: [
    './build-container.component.css'
  ]
})
export class BuildContainerComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;
  @ViewChild(ControlersComponent) controlers: ControlersComponent;
  concept: String;
  size: String;
  gsUrl = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/';
  sub;
  result;
  baseUrl;
  htmlData;
  jsData;
  doc;
  win;
  ver;
  public time = 0;
  public progress = 0;
  public speed = 1;

  constructor(private loader: LoaderService, private ref: ChangeDetectorRef, private route: ActivatedRoute) {
    (<any>window).updateData = this.update.bind(this);
    this.ver = new Date().getTime();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.speed = 1;
      this.concept = params['conceptName'];
      this.size = params['conceptSize'];
      this.ref.detectChanges();
      this.baseUrl = 'concepts/' + this.concept + '/' + this.size + '/';
      this.jsLoader(this.baseUrl + 'js/' + this.size + '.js?v=' + this.ver);
    });
  }

  private jsLoader(url) {
    this.loader.jsLoad(url, this.baseUrl)
      .subscribe(
        data => {
          this.jsData = data;
          this.htmlLoader(this.baseUrl + '/' + this.size + '.html?v=' + this.ver);
        }
      );
  }

  private htmlLoader(url) {
    this.loader.htmlLoad(url, this.gsUrl, this.baseUrl, this.size, this.jsData)
    .subscribe(
      data => {
        this.doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
        this.win = this.iframe.nativeElement.contentWindow;
        this.htmlData = data;
        this.doc.open();
        this.doc.write(this.htmlData);
        this.doc.close();
      }
    );
  }

  update(time, progress) {
    this.time = time;
    this.progress = progress;
    this.controlers.updateTimeSlider(this.progress);
    this.ref.detectChanges();
  }

  pause() {
    // console.log('pause');
    this.win.tl.pause();
  }

  play() {
    // console.log('play');
    this.win.tl.play();
  }

  reverse() {
    // console.log('reverse');
    this.win.tl.reverse();
  }

  resume() {
    // console.log('resume');
    this.win.tl.resume();
  }

  restart() {
    // console.log('restart');
    this.win.tl.restart();
  }

  speedScale(value) {
    switch (Number(value)) {
      case 1:
        this.speed = .25;
        break;
      case 2:
        this.speed = .5;
        break;
      case 3:
        this.speed = 1;
        break;
      case 4:
        this.speed = 2;
        break;
    }
    // console.log('time scale (' + this.speed + 'x)');
    this.win.tl.timeScale(this.speed);
  }

  progressScale(value) {
    // console.log('progress (' + value + ')');
    this.win.tl.progress(value).pause();
  }
}
