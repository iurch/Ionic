import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from '../person/Person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {
  personName: Person;
  greeting: string;
  people = PEOPLE;
  constructor() { }

  ngOnInit(): void {
  }

  addPerson(personName) {
    this.people.push({name: personName});
  }

  keupenven(e) {
    console.log(e);
  }

}
