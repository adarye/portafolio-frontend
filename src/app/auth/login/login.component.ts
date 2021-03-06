import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,private titleService: Title) {
    this.titleService.setTitle('Login');
   }

  ngOnInit(): void {
  }
  login(form) {
    console.log(form.value)
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value);
  }

}
