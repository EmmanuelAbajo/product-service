import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {

  public isClickable: boolean;
  public emailAddress: string;
  public data: User[] = [];

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.isClickable = false;
    this.emailAddress = '';
    this.dataService.fetchData().subscribe((data: User[]) => {this.data = data});
  }

  name: string = "Emmanuel";
  age: number = 25;
  columns: string[] = ['First Name', 'Last Name', 'Age']
  

  setClickable(): void {
    setTimeout(() => {
      this.isClickable = true;
    }, 2000)
  }

  getAge(): number {
    return this.age;
  }


}
