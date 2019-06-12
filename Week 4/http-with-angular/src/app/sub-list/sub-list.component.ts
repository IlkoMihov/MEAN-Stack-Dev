import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.css']
})
export class SubListComponent implements OnInit {
  @Input() subListMessage: string;

  constructor() { }

  ngOnInit() {
  }

}

