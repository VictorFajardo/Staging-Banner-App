import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.css']
})

export class ControlersComponent implements OnInit {
  @Input() time;
  @Input() size;
  @Input() speed;
  @Input() progress;
  @Output() play = new EventEmitter();
  @Output() pause = new EventEmitter();
  @Output() restart = new EventEmitter();
  @Output() reverse = new EventEmitter();
  @Output() timeSlider = new EventEmitter();
  @Output() speedSlider = new EventEmitter();
  @Output() resume = new EventEmitter();
  private sub;
  public link;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const self = this;
    (<any>$('#progressSlider')).slider({
      range: false,
      min: 0,
      max: 1,
      step: .001,
      slide: function ( event, ui ) {
        self.timeSlider.emit(ui.value);
      }
    });
    (<any>$('#speedSlider')).slider({
      value: 3,
      range: false,
      min: 1,
      max: 4,
      step: 1,
      slide: function ( event, ui ) {
        self.speedSlider.emit(ui.value);
      }
    });
    this.sub = this.route.params.subscribe(params => {
      this.link = window.location.href.replace(/QA/g, 'concepts') + '/' + this.size + '.html';
      self.resetSpeedSlider();
    });
    $(function() {
      (<any>$('[data-toggle="tooltip"]')).tooltip({
        classes: {
          'ui-tooltip': 'highlight'
        },
        position: {
          my: 'center top',
          at: 'center bottom+3'
        }
      });
    });
  }

  clickPlay() {
    this.play.emit();
  }

  clickPause() {
    this.pause.emit();
  }

  clickReverse() {
    this.reverse.emit();
  }

  clickResume() {
    this.resume.emit();
  }

  clickRestart() {
    this.restart.emit();
  }

  updateTimeSlider(value) {
    (<any>$('#progressSlider')).slider('value', value);
  }

  resetSpeedSlider() {
    (<any>$('#speedSlider')).slider('value', 3);
  }

  copyUrl() {
    const textArea = document.createElement('textarea');
    textArea.value = this.link;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      (<any>$('#copy-url')).tooltip({
        content: '&nbsp;&nbsp;Copied!&nbsp;&nbsp;',
      });
    } catch (err) {
      (<any>$('#copy-url')).tooltip({
        content: '&nbsp;&nbsp;Failed!&nbsp;&nbsp;',
      });
    }
    document.body.removeChild(textArea);
  }

  mouseEnterCopyUrl() {
    (<any>$('#copy-url')).tooltip({
      content: 'Copy URL'
    });
  }

  openUrl() {
    // (<any>$('#open-url')).tooltip('close');
    window.open(this.link);
  }
}
