import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './main.page.html'
})
export class MainPage {
  public data: any;
  public auth = {
    login: "tech",
    password: "tech_password"
  }

  constructor(
    private http: HttpClient
  ) {
    this.http.post('http://192.168.88.139:1020/auth/login', this.auth).subscribe((user: any) => {
      console.log(user.data.access_token)
      this.http.get(`http://192.168.88.139:1020/v1/crm/requests/1`, {
        headers: {
          Authorization: `Bearer ${user.data.access_token}`
        }
      }).subscribe(data => {
        console.log(data)
      })
    })
  }
}