import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { createProduct, fetchProduct, fetchProducts } from '../constants/constants'
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { IProduct } from '../models/dataproduct';

@Injectable({
  providedIn: 'root'
})
export class RestclientService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<IProduct>(fetchProducts.apiUrl)
      .pipe(
        tap((data: IProduct) => console.log(`fetched ${data.count} products`)),
        map((data: IProduct) => data.products),
        retry(3),
        catchError(this.handleError)
      );
  }

  getProductById(id: string): Observable<Product> {
    const url = fetchProduct.apiUrl.replace('{id}', id);
    return this.http.get<Product>(url)
      .pipe(
        tap((product: Product) => console.log(`fetched product with id: ${product._id}`)),
        retry(3),
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(createProduct.apiUrl, product)
      .pipe(
        tap((newProduct: Product) => console.log(`New Product created. Id: ${newProduct._id}`)),
        retry(3),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
