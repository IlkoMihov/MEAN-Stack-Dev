import { Component } from '@angular/core';
// import { CONTACTS} from './CONTACTS-MOCK';
import {CONTACT} from './CONTACT';
import { ContactServiceAsyncService} from './services/contact-service-async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CS591 Contacts';
  private selectedContact: CONTACT = null;
  contacts = []

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
        console.log(`Contacts: ${this.contacts}`)
      });
  }


  displayContactDetail(contact: CONTACT) {
    this.selectedContact = contact;
  }

  constructor(private contactService: ContactServiceAsyncService) {

  }
  ngOnInit() {
    this.getContacts();
  }
}
