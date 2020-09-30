import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckFormService {
  constructor() {}

  checkUser(user) {
    let flag: boolean;
    let errType: string;
    if (user.name == undefined) {
      flag = false;
      errType = 'Name in empty';
    } else if (user.login == undefined) {
      flag = false;
      errType = 'Login in empty';
    } else if (user.email == undefined) {
      flag = false;
      errType = 'Email in empty';
    } else if (user.password == undefined) {
      flag = false;
      errType = 'Password in empty';
    } else {
      flag = true;
      errType = 'Ok';
    }
    let result = { flag, errType };
    return result
  }
}
