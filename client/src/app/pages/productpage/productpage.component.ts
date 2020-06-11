import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {}

  fetchProductById(id: string): void {
    this.router.navigate(['/app', 'product', 'detail', id]);
  }

  fetchAll(): void {
    this.router.navigate(['/app', 'product', 'detail']);
  }

}
