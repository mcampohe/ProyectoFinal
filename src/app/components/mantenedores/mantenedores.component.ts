import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-mantenedores',
  templateUrl: './mantenedores.component.html',
  styleUrls: ['./mantenedores.component.css']
})
export class MantenedoresComponent implements OnInit {
  @Input() products:any;
  @Input() productById:any;

  product:any;
  id:any;

  constructor(private route: Router, private productsService:  ProductsService, private activateRouter: ActivatedRoute) { 

    this.activateRouter.params.subscribe(data=>{
      this.id = data['id'];
      this.productsService.getProduct(this.id).subscribe(resp=>{
        let data: any = resp;
        this.product = data.mensaje;
      })
    })

  }

  ngOnInit(): void {
    this.allProductsMantenedor();
  }

  allProductsMantenedor(){
    this.products = this.productsService.getData().subscribe(resp => {
      let aux:any = resp;
      this.products = aux.mensaje;   
    });
  }

  showModal() { 
    $("#modalAddProduct").modal("show");
    
  }
  showModalEdit() { 
    $("#modalEditProduct").modal("show");
    
  }
  editProduct(index:any) { 
    this.route.navigate(['/editProduct/'+index]);
  }
  alertDelete() { 
    alert('¿Está seguro de eliminar el producto seleccionado?');
  }
  

  

  
}
