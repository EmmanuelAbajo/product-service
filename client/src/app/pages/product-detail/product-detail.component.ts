import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { RestclientService } from 'src/app/services/restclient.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public columns: string[];
  public data: Product[];
  public errorMessage: string;

  constructor(private restClient: RestclientService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.columns = ['id', 'Name', 'Description', 'Price', 'Category', 'Color'];
    this.errorMessage = '';
    this.data = [];
    this.route.params.subscribe(
      ((param: Params) => {
        this.fetchProductById(param.id);
      })
    );

  }

  fetchProductById(id: string): void {
    this.restClient.getProductById(id)
      .subscribe((product: Product) => {
        this.data = [];
        this.data.push(product);
      },
        (error) => {
          this.errorMessage = error.error;
          this.data = [];
        });
  }


}
