import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendearComponent } from './calendear/calendear.component';
import { CartComponent } from './cart/cart.component';
import { EnterAMedicineComponent } from './enter-a-medicine/enter-a-medicine.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaturalProductsComponent } from './natural-products/natural-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SearchForAPharmacyComponent } from './search-for-a-pharmacy/search-for-a-pharmacy.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product/:SerialNumber',
    component: ProductsComponent,
  },

  {
    path: 'Natural-products',
    component: NaturalProductsComponent,
  },
  {
    path: 'Calendear',
    component: CalendearComponent,
  },
  {
    path: 'Search-For-A-Pharmacy',
    component: SearchForAPharmacyComponent,
  },
  {
    path: 'Enter-Med',
    component: EnterAMedicineComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
