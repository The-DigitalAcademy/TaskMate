import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';

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
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`); // GET request to /users
  }

  // Add a new user
  registerUser(user: User): Observable<User>  {
    return this.http.post<User>(`${this.baseUrl}/users`, user); // POST request to /users
  }

  // Login user with email and password
  loginUser(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`); // GET with filters 
  }

  /* = = = = = = = = = = 
    Task methods
  = = = = = = = = = = */

  // Get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`); // GET request to /tasks
  }

  // Add a new task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`,task); // POST request to /tasks
  }

  // Update a task with ID
  updateTask(id: number, task: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.baseUrl}/tasks/${id}`, task); // PATCH request to /tasks/id
  } // Partial<Task> to only update fields that changed

  // Delete a task by ID
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${id}`); // DELETE request to /tasks/id
  }
}