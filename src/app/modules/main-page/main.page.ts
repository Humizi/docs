import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './main.page.html'
})
export class MainPage {
  public data: any;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('').subscribe(data => {
      this.data = data;
    })
  }
}