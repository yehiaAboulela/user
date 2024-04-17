import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css'],
})
export class SellProductsComponent implements OnInit {
  uploadedImages: any[] = [];

  constructor(private http: HttpClient, private _FormBuilder: FormBuilder) {}

  editTap: boolean = false;

  ngOnInit(): void {}
  onFileChange(event: any): void {
    // Handle file selection and store in uploadedImages array
    const files = event.target.files;
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImages.push({ url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }
  removeImage(url: string): void {
    this.uploadedImages = this.uploadedImages.filter((cur) => cur.url != url);
  }
  emptyImgs(): void {
    this.uploadedImages = [];
  }

  sellProductForm: FormGroup = this._FormBuilder.group({
    productName: [null, [Validators.required]],
    productBrand: [null, [Validators.required]],
    productDescreption: [null, [Validators.required]],
    productPrice: [null, [Validators.required]],
    negotiable: [null, [Validators.required]],
    exchange: [null, [Validators.required]],
  });

  sendProduct() {
    if (this.sellProductForm.status == 'VALID') {
      let data = this.sellProductForm.value;
      data.images = this.uploadedImages;
      //send data to backend
    } else {
      this.sellProductForm.markAllAsTouched();
    }
  }
}
