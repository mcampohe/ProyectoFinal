import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ValidatorsService } from 'src/app/services/validators.service';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  forma: FormGroup;
  ids:any;
  products:any;

  constructor(private fb:FormBuilder, private productsService: ProductsService, private router: ActivatedRoute,
    private _router:Router, private validatorServices : ValidatorsService, private rou: Router){
    this.forma = this.fb.group({});
    this.crearForma();
    
    

  }

  ngOnInit(): void {
    this.router.params.subscribe(paramsId =>{
      this.ids = paramsId['id'];
    })
    this.productsService.getProduct(this.ids).subscribe(resp=>{
      console.log(resp);
      this.cargarData(resp);
    })
  }

  get validNombre(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  crearForma(){
    this.forma = this.fb.group({
      id : ['',[Validators.required]],
      nombre : ['',[Validators.required, Validators.minLength(4)]],
      precio : ['',[Validators.required]],
      tipo : ['',[Validators.required, this.validatorServices.vTipo]],
      descripcion : ['',[Validators.required, Validators.minLength(10)]],
      imagen : ['',[Validators.required]]
    });
    
  }

  cargarData(product:any){
    let mydata = product.mensaje;
    this.forma = this.fb.group({
      id : [mydata.id],
      nombre : [mydata.nombre],
      precio : [mydata.precio],
      tipo : [mydata.id],
      descripcion : [mydata.descripcion],
      imagen : [mydata.imagen]
    });
  }

  guardar(){
    this.modProduct();
  }
  modProduct(){
    let obj = {
      ids: this.ids,
      id : this.forma.get('id')?.value,
      nombre : this.forma.get('nombre')?.value,
      precio : this.forma.get('precio')?.value,
      tipo : this.forma.get('tipo')?.value,
      descripcion : this.forma.get('descripcion')?.value,
      img : "/assets/images/" + this.forma.get('imagen')?.value 
      
    }
    this.productsService.updateProduct(obj).subscribe(resp=>{
      console.log(resp);
      this.products = resp;
    })
    this.rou.navigate(['/mantenedores']);

  }


}
