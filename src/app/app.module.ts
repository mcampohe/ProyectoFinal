import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { MantenedoresComponent } from './components/mantenedores/mantenedores.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailForEditComponent } from './components/detail-for-edit/detail-for-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ShopComponent,
    CardComponent,
    MantenedoresComponent,
    HomeComponent,
    FormComponent,
    FormEditComponent,
    DetailComponent,
    DetailForEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-o3n7njg0.us.auth0.com',
      clientId: 'AQveXSN35eCQacFJfKFoAAA8H38ifhKo'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
