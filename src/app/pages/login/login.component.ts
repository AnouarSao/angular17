import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../../core/validators/domain.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  propEmail = new FormControl<string>('',[
    Validators.required,
    Validators.minLength(3),
    domainValidator('yahoo.com')
  ])
  propPassword = new FormControl()
  myForm = new FormGroup({
    email: this.propEmail,
    password: this.propPassword
  })

  ngOnInit(): void {
      // this.propEmail.setValue('')
  }

  submitted=false
  login() {
    this.submitted=true
    if(this.myForm.invalid) return
    console.log(this.myForm.value);
    setTimeout(() => {
      this.submitted=false
    }, 5000)
  }
}
