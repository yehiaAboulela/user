import { LoadingScreenService } from './../../shared/services/loading-screen.service';
import { ProductsService } from './../../shared/services/poducts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  // "electronics"
  // "jewelery"
  // "men's clothing"
  // "women's clothing"
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (params) => {
        this._ProductsService.getSpecificCategory(params['name']).subscribe({
          next: (response) => {
            this.products = response;
          },
        });
      },
    });
  }
}
