import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
