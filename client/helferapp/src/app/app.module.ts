import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './components/home/home.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from "./servives/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ShoppinglistDetailComponent } from './components/shoppinglist-detail/shoppinglist-detail.component';
import {ShoppinglistService} from "./servives/shoppinglist.service";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    HomeComponent,
    GreetingComponent,
    LoginComponent,
    ShoppinglistDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    HttpClientModule,

  ],
  providers: [ShoppinglistService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
