import { Component, OnInit } from '@angular/core';
import { RestclientService } from 'src/app/services/restclient.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private restClient: RestclientService) { }
  columns: string[] = ['Name', 'Description', 'Price', 'Category', 'Image', 'Color'];
  data: Product[] = [];
  errorMessage = '';

  ngOnInit(): void {
    this.restClient.getAllProducts()
      .subscribe(
        (products: Product[]) => { this.data = products; },
        (error) => {
          this.errorMessage = error;
          this.data = [];
        }
      )
  }

  fetchProductById(id: string): void {
    this.restClient.getProductById(id)
      .subscribe((product: Product) => {
        this.data = [];
        this.data.push(product)
      },
        (error) => {
          this.errorMessage = error;
          this.data = [];
        });
  }


}
