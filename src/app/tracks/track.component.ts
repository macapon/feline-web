import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackService } from '../services/tracks.services';
import { LoginService } from '../login/login.service';

@Component({
    templateUrl: 'app/tracks/track.html',
    styleUrls: [
        'app/tracks/track.css'
    ]
})

export class TrackComponent implements OnInit, OnDestroy {

    idTrack: string;
    points: JSON;

    private listenParameters: any;
    private subscribeGetPoints: any;

    constructor(private trackService: TrackService,
                private loginService: LoginService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.listenParameters = this.route.params.subscribe(params => {
            this.idTrack = params['id'];

            this.subscribeGetPoints = this.trackService.getListOfPoints(this.idTrack).subscribe(
                (result => {
                    this.points = result;
                    }),
                (err => {
                    if (err.status === 401) {
                        // Token expired, enable login menu
                        this.loginService.notLoggedIn();
                        // TODO Inform user
                    }

                    console.log(err);
                })
            );
        });
    }

    ngOnDestroy() {
        this.listenParameters.unsubscribe();
        this.subscribeGetPoints.unsubscribe();
    }
}
