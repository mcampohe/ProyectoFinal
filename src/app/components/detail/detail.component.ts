import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
declare var $:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product:any;
  id:any;

  constructor(private productsService:  ProductsService, private activateRouter: ActivatedRoute) { 
    this.activateRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.productsService.getProduct(this.id).subscribe(resp=>{
        let data: any = resp;
        this.product = data.mensaje;
      })
    })

  }

  ngOnInit(): void {
    
  }

  peso = '$';
}
