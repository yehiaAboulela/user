import { LoadingInterceptor } from './components/shared/interceptors/loading.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SellProductsComponent } from './components/sell-products/sell-products.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { MedicineComponent } from './components/products/medicine/medicine.component';
import { EngineeringComponent } from './components/products/engineering/engineering.component';
import { PharmacyComponent } from './components/products/pharmacy/pharmacy.component';
import { AgricultureComponent } from './components/products/agriculture/agriculture.component';
import { ScienceComponent } from './components/products/science/science.component';
import { EconomicsComponent } from './components/products/economics/economics.component';
import { CsComponent } from './components/products/cs/cs.component';
import { ArtsComponent } from './components/products/arts/arts.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CategoryComponent } from './components/products/category/category.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    NavMainComponent,
    NotFoundComponent,
    OrdersComponent,
    SellProductsComponent,
    SignInComponent,
    SignUpComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    AllProductsComponent,
    MedicineComponent,
    EngineeringComponent,
    PharmacyComponent,
    AgricultureComponent,
    ScienceComponent,
    EconomicsComponent,
    CsComponent,
    ArtsComponent,
    SignInFormComponent,
    SignUpFormComponent,
    CategoryComponent,
    LoadingScreenComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
