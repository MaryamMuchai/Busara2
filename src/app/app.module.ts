import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    // RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width'
    }),  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
