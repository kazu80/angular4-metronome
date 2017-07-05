import {Component, OnInit} from '@angular/core';
import {TempoService} from '../../service/tempo.service';
import {BeatService} from '../../service/beat.service';
import {MetronomeCommon} from '../../common/metronome.common';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    providers  : [
        MetronomeCommon,
        TempoService,
        BeatService
    ]
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
