import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../shared/services/poducts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private _ProductsService: ProductsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  product: any = {};
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (data) => {
        this._ProductsService.getSpecificProduct(data['id']).subscribe({
          next: (response) => {
            this.product = response;
            console.log(this.product);
          },
        });
      },
    });
  }
}
