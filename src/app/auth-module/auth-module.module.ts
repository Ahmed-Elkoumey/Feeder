import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModuleModule {}
