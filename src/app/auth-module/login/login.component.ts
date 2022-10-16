import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  userName = ""


  constructor(private router: Router, private toastr: ToastServiceService) {}

  ngOnInit(): void {}
  showToasterSuccess() {
    
  }


  goToRigister(){
    this.router.navigate(['/register']);

  }
  onSubmit() {
    this.router.navigate(['']);

    this.toastr.showSuccess(
      'Login Success !!',
      'Welcome'
    );
  }
}
