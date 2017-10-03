import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './component/app/app.component';
import {TopComponent} from './component/metronome/top/top.component';
import {routing} from './app.routing';
import {TempoDisplayComponent} from './component/metronome/tempo-display/tempo-display.component';
import {BeatComponent} from './component/metronome/beat/beat.component';
import {SoundComponent} from './component/metronome/sound/sound.component';
import {TempoControlComponent} from './component/metronome/tempo-control/tempo-control.component';
import {TempoControlButtonComponent} from './component/metronome/tempo-control-button/tempo-control-button.component';
import {VolumeComponent} from './component/metronome/volume/volume.component';
import {RunComponent} from './component/metronome/run/run.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainComponent} from './component/stop-watch/main/main.component';
import {RecordingComponent} from './component/recording/recording/recording.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TempoDisplayComponent,
    BeatComponent,
    SoundComponent,
    TempoControlComponent,
    TempoControlButtonComponent,
    VolumeComponent,
    RunComponent,
    MainComponent,
    RecordingComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers   : [],
    bootstrap : [AppComponent],
    schemas   : [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
