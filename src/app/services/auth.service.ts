import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  register(userData: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${userData.email}`).pipe(
      map(users => {
        if (users.length > 0) {
          throw new Error('Email already exists!');
        }
        return userData;
      }),
      // create user in db.json
      switchMap(() => this.http.post<any>(this.apiUrl, userData)),
      tap(newUser => {
        // log in automatically:
        localStorage.setItem('user', JSON.stringify(newUser));
        this.currentUserSubject.next(newUser);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        map((users: string | any[]) => {
          if (users.length > 0) {
            const user = users[0];
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          } else {
            throw new Error('Invalid credentials');
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}