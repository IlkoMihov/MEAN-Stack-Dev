





import {Component, OnInit, Output} from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
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
//@Output()
  subListMessage: string = "This is not a message";

  constructor(private http: HttpClient ) {

    http.get('http://localhost:3000/api/db')
      .subscribe(
        data => this.users = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
    this.httpClient = http;
    //this.subListMessage = "This is not a message";

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
