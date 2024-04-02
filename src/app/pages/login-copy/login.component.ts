import { NgClass, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent /*implements AfterViewInit */{
  /*
  @ViewChild('myForm') form!: NgForm

  ngAfterViewInit(): void {
    console.log(this.form);
  }
  */

  login(form: NgForm) {
    if(form.invalid) return
    console.log(form.value);
  }
}
