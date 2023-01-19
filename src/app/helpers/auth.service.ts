import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

enum Role {
  Admin = 1,
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isRole: any = new BehaviorSubject<number>(Role.Admin);
  isRoleStore = this.isRole.asObservable();
  constructor(private http: HttpClient, private router: Router) { }

  getToken(body: any): Observable<any> {
    return this.http.get("assets/token/jwt.json").pipe(map((res: any) => {
      if (res[0].token) {
        let jwtData = res[0].token.split('.')[1];
        let decodedJwt = window.atob(jwtData)
        let Data = JSON.parse(decodedJwt)
        if (Data) {
          if (Data.name == body.Username) {
            localStorage.setItem("name", Data.name);
          } else {
            alert("Username Incorrect")
            return false;
          }
          if (Data.password == body.Password) {
          } else {
            alert("Password Incorrect")
            return false;
          }
          Data.Role == 1 ? alert("admin") : Data.Role == 2 ? alert("User") : alert("Others");
          localStorage.setItem("token",res[0].token);
        }
      } return res;
    }))
  }

  IsloggerOut(){
    localStorage.clear();
  }
}
