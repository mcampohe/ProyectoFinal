import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { DetailComponent } from './components/detail/detail.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { MantenedoresComponent } from './components/mantenedores/mantenedores.component';
import { ProductComponent } from './components/product/product.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'addProduct', component:FormComponent,canActivate: [AuthGuard]},
  {path:'editProduct/:id', component:FormEditComponent,canActivate: [AuthGuard]},
  {path:'detail/:id', component:DetailComponent},
  {path:'shop', component:ShopComponent},
  {path:'mantenedores', component:MantenedoresComponent, canActivate: [AuthGuard]},
  {path:'', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
