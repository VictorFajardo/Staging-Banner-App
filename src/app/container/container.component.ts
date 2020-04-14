import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  concept: String;
  size: String;
  sub;
  bannerUrl;
  ver;

  constructor(private route: ActivatedRoute) {
    this.ver = new Date().getTime();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.concept = params['conceptName'];
      this.size = params['conceptSize'];
      this.bannerUrl = './concepts/' + this.concept + '/' + this.size + '/' + this.size + '.html?v=' + this.ver;
    });
  }

}
