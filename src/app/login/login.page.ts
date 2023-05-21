import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public user: string;

  constructor(private router: Router) {
    this.user = '';
  }

  ngOnInit() {
  }
async login (){
  this.router.navigate(["/home"]);
}
}
