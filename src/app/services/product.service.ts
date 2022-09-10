import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44372/api/products';

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
