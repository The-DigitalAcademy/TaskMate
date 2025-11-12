import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthRoutingModule } from './features/auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './feature/header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { HomepageComponent } from './component/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    TaskManagementComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
