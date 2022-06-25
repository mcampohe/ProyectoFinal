import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorsService } from 'src/app/services/validators.service';
import { __values } from 'tslib';
import { ProductsService } from '../../services/products.service';
declare var $:any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forma : FormGroup;


  constructor(private fb: FormBuilder, private validatorServices : ValidatorsService, private productsService:  ProductsService,
    private router: Router) {
    this.forma = this.fb.group({});
    this.crearForma();
    
   }

  ngOnInit(): void {
    //this.loadValues();
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

  guardar(){
    this.hideModal();
    this.crearProduct();
  }
  crearProduct(){
    let obj = {
      id : this.forma.get('id')?.value,
      nombre : this.forma.get('nombre')?.value,
      precio : this.forma.get('precio')?.value,
      tipo : this.forma.get('tipo')?.value,
      descripcion : this.forma.get('descripcion')?.value,
      img : "/assets/images/" + this.forma.get('imagen')?.value   
    }
    this.productsService.sendProduct(obj).subscribe(resp=>{
    })
    
    this.router.navigate(['/product']);
  }

  hideModal() { 
    $("#modalAddProduct").modal("hide");
  }

}
