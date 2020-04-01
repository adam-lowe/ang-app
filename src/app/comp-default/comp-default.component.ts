import { Component, OnInit } from '@angular/core';
import { PersonService } from '../my-service.service';
//<app-comp-default.component></app-comp-default.component>
@Component({
  selector: 'app-comp-default.component',
  templateUrl: './comp-default.component.component.html',
  styleUrls: ['./comp-default.component.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: String[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    // this.personService.getPeople().subscribe(p => this.peopleList = p);

    this.peopleList = this.personService.getPeople();
  }

}
