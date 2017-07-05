import {Component, OnInit} from '@angular/core';
import {TempoService} from '../../service/tempo.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    providers  : [
        TempoService
    ]
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
