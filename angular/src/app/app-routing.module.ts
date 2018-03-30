import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
<<<<<<< HEAD
import {ProductPageComponent} from './components/product-page/product-page.component';
=======
import {SearchComponent} from "./components/search/search.component";
import {UserPanelComponent} from "./components/user-panel/user-panel.component";
>>>>>>> 67e5a17e4f14905d7c562f8c0e6509c0cd36bdf4

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
<<<<<<< HEAD
        path: 'product/:id',
        component: ProductPageComponent
=======
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'user',
        component: UserPanelComponent
>>>>>>> 67e5a17e4f14905d7c562f8c0e6509c0cd36bdf4
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
