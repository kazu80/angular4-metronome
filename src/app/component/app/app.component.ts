import {Component, OnInit} from '@angular/core';
import {TempoService} from '../../service/tempo.service';
import {BeatService} from '../../service/beat.service';
import {MetronomeCommon} from '../../common/metronome.common';
import {SoundService} from '../../service/sound.service';
import {VolumeService} from '../../service/volume.service';
import {AppDispatcher} from '../../walts/app.dispatcher';
import {AppActions} from '../../walts/app.actions';
import {AppStore} from '../../walts/app.store';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    providers  : [
        MetronomeCommon,
        TempoService,
        BeatService,
        SoundService,
        VolumeService,
        AppDispatcher,
        AppActions,
        AppStore
    ]
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
