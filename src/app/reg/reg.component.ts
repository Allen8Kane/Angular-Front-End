import { Component, OnInit } from '@angular/core';
import { CheckFormService } from '../check-form.service';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
})
export class RegComponent implements OnInit {
  name: String;
  login: String;
  email: String;
  password: String;

  constructor(
    private checkForm: CheckFormService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  userRegisterClick() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };
    let checkResult = this.checkForm.checkUser(user);
    if (!checkResult.flag) {
      this.flashMessagesService.show(checkResult.errType, {
        cssClass: 'alert-danger',
        timeout: 5000,
      });
    } else {
      this.authService.registerUser(user);
    }
  }
}
