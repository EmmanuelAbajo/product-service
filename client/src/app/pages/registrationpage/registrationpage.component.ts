import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {
  public emailAddress: string;
  public data: User[];
  public columns: string[];
  public name: string;
  public age: number;


  constructor(private dataService: DataserviceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailAddress = '';
    this.dataService.fetchData().subscribe((data: User[]) => {this.data = data});
    this.columns = ['First Name', 'Last Name', 'Age'];
    this.name = "Emmanuel";
    this.age = 25;
  }

  getAge(): number {
    return this.age;
  }

  addProduct(): void{
      this.router.navigate(['../product'],{relativeTo: this.route});
  }


}
