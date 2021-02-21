
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_HOME } from '../../helpers/variables';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getUserInfo(user_id: string): Observable<any> {
    return this.http.get(`${API_HOME}/spotify/user?user_id=${user_id}`)
      .pipe(catchError(val => {
          // todo actual error catching
          console.error(`Error encountered: ${val}`);
          return val;       
        })
      );
  }
}
