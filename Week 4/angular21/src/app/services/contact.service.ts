import { Injectable } from '@angular/core';
import {CONTACT} from '../models/contactModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsEndpoint = 'http://localhost:3000/api';
//  contacts = CONTACTS;
  getContacts(): Observable<CONTACT[]> {
    return this.httpClient.get<CONTACT[]>(this.contactsEndpoint);
  }

  addContact(newContact: CONTACT): any {

     return this.httpClient.post<any>(this.contactsEndpoint, newContact);

  }

  constructor(private httpClient: HttpClient) { }
} 
