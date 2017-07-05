import {Component, OnInit} from '@angular/core';
import {TempoService} from '../../../service/tempo.service';

@Component({
    templateUrl: './top.component.html',
    styleUrls  : ['./top.component.scss']
})
export class TopComponent implements OnInit {

    constructor(private tempoService: TempoService) {

    }

    ngOnInit() {
    }

    getTempo(): number {
        return this.tempoService.tempo;
    }

    getAnimation(): string {
        return this.tempoService.animation;
    }
}
