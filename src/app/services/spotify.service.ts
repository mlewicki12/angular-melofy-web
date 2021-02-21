
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PrivateUser } from 'src/helpers/spotify_types';
import { ApiError } from 'src/helpers/types';

import { API_HOME } from '../../helpers/variables';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public userStream: Subject<PrivateUser>;

  constructor(private http: HttpClient) {
    this.userStream = new Subject();
  }

  getUserInfo(user_id: string): Observable<PrivateUser> {
    return this.http.get(`${API_HOME}/spotify/user?user_id=${user_id}`)
      .pipe(catchError(val => {
          // todo actual error catching
          console.error(`Error encountered: ${val.error.message}`);
          return of(val.error as ApiError);
        }),
        map(val => val as PrivateUser),
        tap(val => {
          this.userStream.next(val);
        })
      );
  }
}
