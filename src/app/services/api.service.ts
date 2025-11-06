import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  // Service available in the whole app
  providedIn: 'root'
})
export class ApiService {

  // Api URL from environment file
  private baseUrl = environment.apiUrl;

   // Constructor to use HttpClient
  constructor(private http: HttpClient) { }

  /* = = = = = = = = = = 
    User methods
  = = = = = = = = = = */

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`); // GET request to /users
  }

  // Add a new user
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user); // POST request to /users
  }

  // Login user with email and password
  loginUser(email: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?email=${email}&password=${password}`); // GET with filters 
  }

  /* = = = = = = = = = = 
    Task methods
  = = = = = = = = = = */

  // Get all tasks
  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks`); // GET request to /tasks
  }

  // Add a new task
  addTask(task: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tasks`,task); // POST request to /tasks
  }

  // Update a task with ID
  updateTask(id: number, task: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/tasks/${id}`, task); // PATCH request to /tasks/id
  }

  // Delete a task by ID
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tasks/${id}`); // DELETE request to /tasks/id
  }
}