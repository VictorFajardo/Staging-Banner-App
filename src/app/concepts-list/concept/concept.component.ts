import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-concept',
    templateUrl: './concept.component.html',
    styleUrls: ['./concept.component.css']
})

export class ConceptComponent implements OnInit {
    @Input() concept;
    @Input() individual: boolean;
    pre;

    constructor() {}

    ngOnInit() {
        if (this.individual === true) {
            this.pre = '../';
        }
    }
}
