
import { Component, OnInit } from '@angular/core';
import { API_HOME } from '../../../helpers/variables';

@Component({
  selector: 'melofy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public apiHome = API_HOME;

  constructor() { }

  ngOnInit(): void {
  }
}
