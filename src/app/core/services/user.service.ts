import { Injectable, computed, inject, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

type UserPayload = Omit<User, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
private readonly url = 'https://jsonplaceholder.typicode.com/users';

  userNameSearched = signal('');
  userNameUppercase = computed(() => this.userNameSearched().toUpperCase());
  users = signal<User[]>([]);
  usersFiltered = computed(() =>
    this.users().filter((user) => user.name.includes(this.userNameSearched()))
  );
  usersName = computed(() => this.users().map(user => user.name))

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users: User[])=> {
        this.users.set(users);
      })
    );
  }

  create(payload: UserPayload): Observable<User> {
    return this.http.post<User>(this.url, payload).pipe(
      tap((user: User)=>{
        this.users.set([...this.users(), user]);
      })
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/'+ id).pipe(
      tap(() => {
        const users = this.users().filter((user) => user.id != id);
        this.users.set(users);
      }),
      catchError((err) => {
        console.log(err)
        throw err
      })
    );
  }

  getById(id: number): Observable<User>{
    return this.http.get<User>(this.url + '/'+ id)
  }

  update(id: number, payload: UserPayload): Observable<User> {
    return this.http.put<User>(this.url + '/'+ id, payload)
  }
}
