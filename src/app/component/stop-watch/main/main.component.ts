import {Component, OnInit} from '@angular/core';
import Timer = NodeJS.Timer;
import {NavigationStart, Router} from '@angular/router';

@Component({
    selector   : 'app-main',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class MainComponent implements OnInit {
    interval_id: Timer;
    audio: HTMLAudioElement;
    time: string;
    isWarning: boolean;
    start_time: number;
    isStart: boolean;

    constructor(router: Router) {
        router.events.subscribe((val) => {
            // Navigation Start
            if (val instanceof NavigationStart) {
                if (this.interval_id) {
                    clearInterval(this.interval_id);
                    if (this.audio) {
                        this.audio.pause();
                    }
                }
            }
        });
    }

    ngOnInit() {
        this.time       = '00:00 000';
        this.isWarning  = false;
        // this.start_time = 1000 * 60 * 3
        this.start_time = 1000 * 31;
        this.isStart    = false;

        this.time = this.createTime(this.start_time);
    }

    private startWatch() {
        if (this.isStart) {
            clearInterval(this.interval_id);
            this.time      = this.createTime(this.start_time);
            this.isWarning = false;
        } else {
            const startMusic = new Audio('../../../../assets/sound/start_01.mp3');
            startMusic.addEventListener('ended', () => {

                const startMusic2 = new Audio('../../../../assets/sound/start_03.mp3');
                startMusic2.addEventListener('ended', () => {
                    this.start(this.start_time);
                });
                startMusic2.play();
            });
            startMusic.play();
        }

        this.isStart = !this.isStart;
    }

    private createTime(time: number) {
        const hour: number = Math.floor(time / (60 * 60 * 1000));
        time               = time - (hour * 60 * 60 * 1000);

        const min: number = Math.floor(time / (60 * 1000));
        time              = time - (min * 60 * 1000);

        const sec: number = Math.floor(time / 1000);

        const msec: number = time % 1000;

        const hour_s: string = ('00' + hour).slice(-2);
        const min_s: string  = ('00' + min).slice(-2);
        const sec_s: string  = ('00' + sec).slice(-2);
        const msec_s: string = ('000' + msec).slice(-3);

        return min_s + ':' + sec_s + ' ' + msec_s;
    }

    private start(time: number) {
        this.interval_id = setInterval(() => {
            time = time - 10;

            if (time === 1000 * 27) {
                this.heartSound('../../../../assets/sound/heart-sound.mp3');
            }

            if (time < 1000 * 60) {
                this.isWarning = true;
            }

            if (time < 0) {
                this.isWarning = false;
                clearInterval(this.interval_id);
                this.heartSound('../../../../assets/sound/siren.mp3');
                this.time = '00:00 000';
                return;
            }

            this.time = this.createTime(time);
        }, 10);
    }

    private heartSound(path: string) {
        this.audio = new Audio(path);
        this.audio.play();
    }

}
