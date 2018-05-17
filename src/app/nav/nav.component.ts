import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../shared/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() concept;
  @Input() size;
  @Input() qa;
  jobCode;
  concepts;
  base;

  constructor(private loadData: ConfigService, private router: Router) { }

  ngOnInit() {
    this.jobCode = this.loadData.getJobCode();
    this.concepts = this.loadData.getConcepts();
    this.base = this.qa ? 'QA/' : '';
  }

  changeSelect(value) {
    if (value !== (this.base + this.concept + '/' + this.size) && value !== '') {
      console.log('routing...');
      this.router.navigate([value]);
    }
  }

}
