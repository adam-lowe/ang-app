import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  person = "./Person.json";
  
  newPerson: string[];
  // constructor(private http: HttpClient) { }

  // getPeopleWeb(): Observable<{ name: string, age: number, email:string }[]>
  // {
  //   return this.http.get<{ name: string, age: number, email:string }[]>(this.personUrl);
  // };

  getPeople(){
    return [this.person];
  };

  ngOnInit() {
    this.newPerson = this.getPeople();
  }
}
