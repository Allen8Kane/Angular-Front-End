import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

/* @Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
} */

export class AuthService {

  constructor(private httpClient: HttpClient) {  }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json')

    return this.httpClient.post(
      'http://http://localhost:3000/account/reg',
      user,
      {headers: headers}).pipe(map((response: any) => response.json()));
  }

}
