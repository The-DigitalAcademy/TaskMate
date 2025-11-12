import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  registerError: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  onSubmit() {
  if (this.registerForm.invalid) return;

  const formData = this.registerForm.value;

  this.authService.register(formData).subscribe({
    next: () => {
      alert('Registration successful!');
      this.router.navigate(['/homepage']);
    },
    error: (err) => {
      this.registerError = err.message || 'Registration failed';
    }
  });
}
}
