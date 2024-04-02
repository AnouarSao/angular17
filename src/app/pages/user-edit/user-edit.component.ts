import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/interfaces/user.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  route = inject(ActivatedRoute)
  private userService = inject(UserService)
  user: User = {} as User

  propName = new FormControl<string>('')
  propUsername = new FormControl<string>('')
  propEmail= new FormControl<string>('')

  myForm: FormGroup = new FormGroup({
    name: this.propName,
    username: this.propUsername,
    email: this.propEmail,
  })

  ngOnInit(): void {
      this.userService.getAll().subscribe(); // pour l'exercice
      const userId = this.route.snapshot.params['userId']
      //console.log(userId)
      this.userService.getById(userId).subscribe((user: User) =>{
        this.user = user
        this.propName.setValue(this.user.name)
        this.propUsername.setValue(this.user.username)
        this.propEmail.setValue(this.user.email)
      })
  }

  edit(){
     this.userService
      .update(this.user.id, this.myForm.value)
      .subscribe((userModified: User) => {
        this.user=userModified
      })
  }
}
