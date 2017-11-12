import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/login.service';
import { User } from '../service/login/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

  }

  login() {
    if (this.loginService.login(this.user)) {
      this.router.navigate(['order']);
    }
  }


}
