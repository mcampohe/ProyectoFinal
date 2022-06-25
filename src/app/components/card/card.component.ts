import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput:any;
  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log(this.dataInput);
  }
  detailProduct(index:any){
    this.route.navigate(['/detail/'+index]);
  }
  
}
