import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { RestclientService } from 'src/app/services/restclient.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  public columns: string[];
  public data: Product[];
  public errorMessage: string;

  constructor(private restClient: RestclientService) { }

  ngOnInit(): void {
    this.columns = ['Name', 'Description', 'Price', 'Category', 'Image', 'Color'];
    this.errorMessage = '';
    this.data = [];
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.restClient.getAllProducts()
      .subscribe(
        (products: Product[]) => { this.data = products; },
        (error) => {
          this.errorMessage = error.error;
          this.data = [];
        }
      );
  }
}
