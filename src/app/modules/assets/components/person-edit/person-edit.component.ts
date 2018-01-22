import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Person } from '../../services/model/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../../services/api/persons.service';
import * as Randomizer from '../../../../shared/IDRandomizer';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  personFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  matcher: ErrorStateMatcher = new MyErrorStateMatcher();

  _person: Person = <Person> {};
  _birthDate: any;

  adding: boolean;

  constructor(public activeRoute: ActivatedRoute,
              public router: Router,
              public personsService: PersonsService) {
    this.adding = activeRoute.snapshot.params['operation'] === 'add';

    if (!this.adding) {
      const id: string = activeRoute.snapshot.params['operation'];
      personsService.getPersonById(id)
        .subscribe((person: Person) => {
          this._person = person;
          this._birthDate = person.birthDate;
        });
    }
  }

  ngOnInit() {
  }

  addPerson(e) {
    this._birthDate = this._birthDate || '';
    this._person.birthDate = this._birthDate.toString() ;

    if (this.adding) {
      /////////////////////////////////////////////////////////////
      // remove when add real database storage
      this._person.id = Randomizer.getRandomInt(10, 1000000).toString();
      /////////////////////////////////////////////////////////////
      this.personsService.createNewPerson(this._person)
        .subscribe( () => {
            this.router.navigateByUrl('/assets/persons');
        });
    }else {
      this.personsService.updatePerson(this._person)
        .subscribe( () => {
            this.router.navigateByUrl('/assets/persons');
        });
    }
  }
}
