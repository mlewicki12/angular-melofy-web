
import { Injectable } from '@angular/core';
import axios from 'axios';
import * as qs from 'query-string';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  handleLogin() {
  /*console.log('sending request to localhost');
    axios.get('https://localhost:8080/greeting').then(console.log);
    axios.get('https://localhost:8080/spotify/authorize').then(console.log).catch((err) => {
      console.log(err);
      if(err.response) {
        console.log(err.response);
      } else if (err.request) {
        console.log('yr mum gay');
        console.log(err.request);
      }
    });
    */

    const params = {
      client_id: '11d45ba62abd4480bea0d54ad7e9c685',
      response_type: 'code',
      redirect_uri: 'localhost:4200'
    };

    console.log('sending request to spotify');
    axios.get('https://accounts.spotify.com/authorize?' + qs.stringify(params));
  }
}
