import {Component, OnInit} from '@angular/core';
import {TempoService} from '../../service/tempo.service';
import {BeatService} from '../../service/beat.service';
import {MetronomeCommon} from '../../common/metronome.common';
import {SoundService} from '../../service/sound.service';
import {VolumeService} from '../../service/volume.service';
import {AppDispatcher} from '../../walts/app.dispatcher';
import {AppActions} from '../../walts/app.actions';
import {AppStore} from '../../walts/app.store';
import {CounterService} from '../../service/counter.service';

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
        CounterService,
        AppDispatcher,
        AppActions,
        AppStore
    ]
})
export class AppComponent implements OnInit {
    constructor(private counterService: CounterService) {
    }

    ngOnInit() {
    }

    getCount() {
        return this.counterService.count;
    }
}
