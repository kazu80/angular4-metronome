import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app/app.component';
import {TopComponent} from './component/metronome/top/top.component';
import {routing} from './app.routing';
import {TempoDisplayComponent} from './component/metronome/tempo-display/tempo-display.component';
import {BeatComponent} from './component/metronome/beat/beat.component';
import {SoundComponent} from './component/metronome/sound/sound.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TempoDisplayComponent,
    BeatComponent,
    SoundComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
