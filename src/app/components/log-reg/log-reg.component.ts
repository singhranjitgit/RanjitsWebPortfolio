import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-logreg',
    templateUrl: './log-reg.component.html',
    styleUrls: ['./log-reg.component.scss']
})

export class LogregComponent {
    loginForm: FormGroup;
    signUpForm: FormGroup;
    submitted = false;
    errorMessage: string = '';
    loginView: boolean = false;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.signUpForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        const { email, password } = this.loginForm.value;

        if (email === 'user@example.com' && password === 'password123') {
            console.log('Login successful');
            this.errorMessage = '';
        } else {
            this.errorMessage = 'Invalid email or password';
        }
    }
}