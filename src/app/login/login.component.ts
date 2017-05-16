import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:  string;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService ) { }

  ngOnInit() {
    // reset login status
    this.loginService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {
    console.log(`iniciar sesion de usuario ${ this.username }`);
    this.loginService.login(this.username, this.password).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, error => {

    });
  }

}
