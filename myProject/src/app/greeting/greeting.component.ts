import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person/Person';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.sass']
})
export class GreetingComponent implements OnInit {

  @Input() person: Person;

  // names: string[] = ["item 1","item 2", "item 3", "item 4"];
  // names = [{name:"item 1"},{name:"item 2"}];

  constructor() { }

  ngOnInit(): void {
  }

}
