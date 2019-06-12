import { Component, OnInit, Input } from '@angular/core';

import {CONTACT} from '../CONTACT';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() selectedContact: CONTACT;

  constructor() { }

  ngOnInit() {
  }

}
