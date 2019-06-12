





import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

//http returns an Observable, not a Promise
//
export class UsersComponent implements OnInit {
users: any;
httpClient: any;
  constructor(private http: HttpClient ) {

    http.get('http://localhost:3000/api/db')
      .subscribe(
        data => this.users = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
    this.httpClient = http;
   }

  ngOnInit() {
      this.httpClient.get('http://localhost:3000/api/db')
        .subscribe(
          data => this.users = data,
          err => console.log(`Error: ${err}`),
          () => console.log(`Completed request`)
        );
  }

  postData() {
    this.httpClient.post()
  }

}
