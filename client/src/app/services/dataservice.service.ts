import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  public data: User[] = [{ firstName: "Emmanuel", lastName: "Abajo", age: 30 },
                          { firstName: "Emmanuel", lastName: "Abajo", age: 30 },
                          { firstName: "Emmanuel", lastName: "Abajo", age: 30 }];

  statusUpdated = new EventEmitter<string>();

  fetchData(): Observable<User[]> {
    return of(this.data);
  }

  create(firstName: string, lastName: string, age: number): void {
        this.data.push({
          firstName,
          lastName,
          age
        });
  }
}

