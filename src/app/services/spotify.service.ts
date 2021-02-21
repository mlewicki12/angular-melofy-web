
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { PrivateUser } from 'src/helpers/spotify_types';
import { ApiError } from 'src/helpers/types';

import { API_HOME } from '../../helpers/variables';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getUserInfo(user_id: string): Observable<PrivateUser | ApiError> {
    return this.http.get(`${API_HOME}/spotify/user?user_id=${user_id}`)
      .pipe(catchError(val => {
          // todo actual error catching
          console.error(`Error encountered: ${val}`);
          return val;       
        }), map(val => {
          return val as PrivateUser;
        })
      );
  }
}
