import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/poducts.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  products: any[] = [];

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }
}
