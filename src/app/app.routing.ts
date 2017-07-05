import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
// import {StopWatchComponent} from "./stop-watch.component";
import {TopComponent} from './component/metronome/top/top.component';
// import {RecordingComponent} from "./recording.component";

export const routing: ModuleWithProviders = RouterModule.forRoot([
    {path: '', component: TopComponent},
//    {path: 'stop-watch', component: StopWatchComponent},
//    {path: 'recording', component: RecordingComponent},
]);


