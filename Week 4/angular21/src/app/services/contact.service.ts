import { Injectable } from '@angular/core';
// import {CONTACTS} from '../CONTACTS-MOCK';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CONTACT} from '../CONTACT';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsEndpoint = 'http://localhost:3000/api';
//  contacts = CONTACTS;
  getContacts(): Observable<CONTACT[]> {
    return this.httpClient.get<CONTACT[]>(this.contactsEndpoint);
  }

  addContact(newContact: CONTACT): void {

   // this.contacts.push(newContact);
  }

  constructor(private httpClient: HttpClient) { }
}
