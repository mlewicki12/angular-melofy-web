
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { SpotifyService } from 'src/app/services/spotify.service';

import { USER_COOKIE_KEY } from '../../../helpers/variables';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public name: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private jar: CookieService,
              private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(val => {
      if(val.user_id) { // server returned a user, we're logged in
        this.jar.put(USER_COOKIE_KEY, val.user_id, {sameSite: 'lax', secure: true});
        console.log(`logged in!\nuser_id: ${this.jar.get(USER_COOKIE_KEY)}`);

        this.getUserInfo();
      } else { // if there's no user to overwrite, check if there's a login store
        if(this.jar.hasKey(USER_COOKIE_KEY)) {
          console.log(`logged in!\nuser_id: ${this.jar.get(USER_COOKIE_KEY)}`);
          this.getUserInfo();
        } else {
          console.log('redirecting to login page');
          this.router.navigate(['/login']);
        }
      }
    });
  }

  getUserInfo(): void {
    this.spotify.getUserInfo(this.jar.get(USER_COOKIE_KEY)).subscribe(val => {
      this.name = val.displayName;
    });
  }

}
