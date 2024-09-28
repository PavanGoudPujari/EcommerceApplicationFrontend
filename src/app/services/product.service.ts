import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';              
import { Product } from '../common/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl="http://localhost:8080/api/product";

  constructor(private httpClient: HttpClient) {}

  getProducts() : Observable<Product[]>{

    return this.httpClient.get<GetResponse>(this.apiUrl)
    .pipe(map(response=>response._embedded.productEntities));
  }

}
interface GetResponse{
  _embedded: {
    productEntities: Product[];
  }


}
   

