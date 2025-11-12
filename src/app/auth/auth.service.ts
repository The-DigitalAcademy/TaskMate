import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.API}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (!users.length) throw new Error('Invalid credentials');
        return users[0];
      }),
      catchError(err => throwError(() => err))
    );
  }

  register(email: string, password: string, name?: string): Observable<User> {
    const newUser: User = { email, password, name, token: 'fake-token' };
    return this.http.post<User>(this.API, newUser);
  }
} 

