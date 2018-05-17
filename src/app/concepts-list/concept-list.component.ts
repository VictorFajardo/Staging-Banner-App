import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component ({
    selector: 'app-concept-list',
    templateUrl: './concept-list.component.html',
    styleUrls: ['./concept-list.component.css']
})

export class ConceptListComponent implements OnInit {
    jobCode;
    concepts;
    concept;
    conceptName;
    sub;

    constructor(private loadData: ConfigService, private route: ActivatedRoute, private router: Router) {
        this.jobCode = this.loadData.getJobCode();
        this.concepts = this.loadData.getConcepts();
        this.sub = this.route.params.subscribe(params => {
            this.conceptName = params['conceptName'];
            if (!this.compareConcepts(this.conceptName)) {
                this.router.navigate(['/']);
            }
        });
    }

    ngOnInit() {}

    compareConcepts(conceptName) {
        for (const x of this.concepts) {
            if (x.concept === conceptName) {
                this.concept = x;
                return true;
            }
        }
    }
}
