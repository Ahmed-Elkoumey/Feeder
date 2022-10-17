import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {




  constructor(private fb: FormBuilder,private router :Router,private toastr:ToastServiceService) {}







  profileForm = this.fb.group(
    {
      Name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern(/\w+\@\w+\.\w+/)]],
      userName: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),

      confirmPassword: new FormControl('', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
    },

    {
      validators: RegisterComponent.MatchValidator(
        'password',
        'confirmPassword'
      ),
    }
  );

  ngOnInit(): void {}

  get formControls() {
    return this.profileForm.controls;
  }

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }

  get passwordMatchError() {
    return (
      this.profileForm.getError('mismatch') &&
      this.profileForm.get('confirmPassword')?.touched
    );
  }
goToLogin(){
  this.router.navigate(['/login']);

}

  onSubmit(){
    this.router.navigate(['/login']);

    this.toastr.showWarning(
      'Rigester Success !!',
      'Please Write your Email & PassWord'
    );
  }
}
