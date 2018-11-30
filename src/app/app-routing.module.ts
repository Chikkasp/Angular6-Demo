import { NgModule } from '@angular/core';
import { RouterModule,Route} from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemoComponent } from './demo/demo.component';
import { ErrorComponent } from './components/error/error.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { AuthGuard } from './services/auth.guard';

const routes : Route [] = [
    {path : '', redirectTo : '/products', pathMatch: 'full'},
    {path : 'products',component : ProductListComponent},
    {path : 'demo', component: DemoComponent},
    { path : 'users', component : UserListComponent,canActivate : [AuthGuard]},
    {path : 'forms', canActivate:[AuthGuard], children : [
      {path :'template', component : TemplateDrivenComponent},
      {path : 'model/:id', component :ModelDrivenComponent},
      {path : 'dynamic', component :DynamicFormsComponent}
    ]},
    {path : '**', component :ErrorComponent}
];
@NgModule({
  exports : [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
