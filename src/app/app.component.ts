import { Component } from '@angular/core';
import { PersonService } from "./my-service.service"

@Component({
  selector: 'app-root',
  templateUrl: './comp-default/comp-default.component.html',
  styleUrls: ['./comp-default/comp-default.component.css']
})
export class AppComponent {
  title = 'ang-application';

  peopleList: String[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    // this.personService.getPeople().subscribe(p => this.peopleList = p);

    this.peopleList = this.personService.getPeople();
  }

}
