
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PrivateUser } from 'src/helpers/spotify_types';
import { ApiError } from 'src/helpers/types';

@Component({
  selector: 'melofy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.spotify.userStream.subscribe(val => {
      console.log(val);
      if(val.displayName) {
        this.name = val.displayName;
      }
    });
  }

}
