import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { RestService } from './services/rest.service';
import { CrudService } from './services/crud.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import {MessageService} from './services/message.service';
import {MapToIterable} from './map-to-iterable.pipe';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ErrorMessageComponent,
    MapToIterable,
    ProductPageComponent,
    CartComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      RestService,
      CrudService,
      AuthService,
      MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
