import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CategoryComponent } from './components/products/category/category.component';
import { CsComponent } from './components/products/cs/cs.component';
import { ArtsComponent } from './components/products/arts/arts.component';
import { EconomicsComponent } from './components/products/economics/economics.component';
import { ScienceComponent } from './components/products/science/science.component';
import { AgricultureComponent } from './components/products/agriculture/agriculture.component';
import { PharmacyComponent } from './components/products/pharmacy/pharmacy.component';
import { EngineeringComponent } from './components/products/engineering/engineering.component';
import { MedicineComponent } from './components/products/medicine/medicine.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },

      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            redirectTo: 'allproducts',
            pathMatch: 'full',
          },
          { path: 'allproducts', component: AllProductsComponent },
          // { path: 'medicine', component: MedicineComponent },
          // { path: 'engineering', component: EngineeringComponent },
          // { path: 'pharmacy', component: PharmacyComponent },
          // { path: 'agriculture', component: AgricultureComponent },
          // { path: 'science', component: ScienceComponent },
          // { path: 'economics', component: EconomicsComponent },
          // { path: 'arts', component: ArtsComponent },
          // { path: 'cs', component: CsComponent },
          { path: ':name', component: CategoryComponent },
        ],
      },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'sellproducts', component: SellProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: EditProfileComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
