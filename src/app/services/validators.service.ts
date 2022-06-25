import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  vTipo(control : FormControl){
    if(control.value?.toLowerCase() === 'BandaElastica' || 
    control.value?.toLowerCase() === 'Discos' || 
    control.value?.toLowerCase() === 'Paralelas' || 
    control.value?.toLowerCase() === 'Otros' ||
    control.value?.toLowerCase() === 'Mancuernas' ||  
    control.value?.toLowerCase() === 'Magnesio'){
      return{
        vTipo:true
      }
    }
    return null;
  }

}
