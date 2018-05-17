import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'app-concepts-list',
    templateUrl: './concepts-list.component.html',
    styleUrls: ['./concepts-list.component.css']
})

export class ConceptsListComponent implements OnInit {
    jobCode;
    concepts;
    path;
    pre;

    constructor(private loadData: ConfigService, private router: Router ) {
        if (this.router.url === '/QA') {
            this.pre = 'QA ';
        }
    }

    ngOnInit() {
        this.jobCode = this.loadData.getJobCode();
        this.concepts = this.loadData.getConcepts();
    }

}
