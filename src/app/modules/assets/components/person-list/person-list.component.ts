import {Component, OnInit} from '@angular/core';
import { PersonsService } from '../../services/api/persons.service';
import { Person } from '../../services/model/models';
import { ErrorMessage } from '../../services/model/errorMessage';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})

export class PersonListComponent implements OnInit {

  persons: Array<Person>;

  constructor(public personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getAllPersons()
      .subscribe((persons: Array<Person>) => {
        this.persons = persons;
      });
  }

  removeFromList(person: Person): void {
    this.personsService.deletePerson(person.id)
      .subscribe( (result: string | ErrorMessage) => {
        console.log(result);
        this.personsService.getAllPersons()
          .subscribe((persons: Array<Person>) => {
            this.persons = persons;
          });
      });
  }

}
