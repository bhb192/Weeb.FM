import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService, ScrobbleService, UserService } from '../services/index';
import { ScrobbleTableComponent } from '../common/index';
import { AppComponent } from '../app.component';

@Component({
    selector: 'profile',
    template: `<h2>Profile Component</h2>
    <img style="width:64px; height:64px" [src]="avatar"> <h2>{{nick}}</h2>
    <scrobble-table [content]="scrobbles"><h1>Loading...</h1></scrobble-table>
    `,
    providers: [
      HttpService,
      ScrobbleService,
      UserService
    ],
})

export class ProfileComponent implements OnInit {
  private scrobbles: Array<any> = [];
  private uid: string;
  private avatar: string = 'http://localhost:8000';
  private nick: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private Scrobble: ScrobbleService,
    private User: UserService,
    private app: AppComponent
  ) {
  }

  public ngOnInit() {
    this.uid = this.route.snapshot.params['id'];

    this.User.getUserNick(this.uid).subscribe((r: any) => {
      this.nick = r;
    });

    this.User.getUserAvatar(this.uid).subscribe((r: any) => {
      this.avatar += r;
    });

    this.Scrobble.getUserScrobbles(this.uid).subscribe((r: any) => {
      this.scrobbles = r;
      this.app.loading = false;
    });
  }

}
