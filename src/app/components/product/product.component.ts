import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;

  constructor(private productsService:  ProductsService) { }

  ngOnInit(): void {
    this.allProducts();
  }

  allProducts(){
    this.products = this.productsService.getData().subscribe(resp => {
      let aux:any = resp;
      this.products = aux.mensaje;
    });
  }

}
