import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConverterPipe } from './pipes/converter.pipe';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { ShowErrorsComponent } from './forms/show-errors/show-errors.component';
import { DynamicFormsComponent } from './forms/dynamic-forms/dynamic-forms.component';
import { HttpClientModule, HTTP_INTERCEPTORS}  from '@angular/common/http';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { UserModule } from './user/user.module';
import { CalendarDirective } from './directives/calendar.directive';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './components/error/error.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConverterPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ShowErrorsComponent,
    DynamicFormsComponent,
    UserListComponent,
    UserComponent,
    CalendarDirective,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi :true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
