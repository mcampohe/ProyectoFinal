import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 private url = 'http://localhost:3000'
 

constructor(private http: HttpClient){

}

  getData(){
    return this.http.get(this.url + '/products');
  }
/*
  getOneProduct(id:any){
    return this.http.get(this.url + '/product/'+1);
  }
  */

  sendProduct(product:any){
    return this.http.post(this.url + '/product', product);
  }

  updateProduct(product:any){
    return this.http.put(`${this.url}/product/${product.ids}`,product);
  }

  getProduct(id:any){
    return this.http.get(`${this.url}/product/${id}`);
  }

  
}
