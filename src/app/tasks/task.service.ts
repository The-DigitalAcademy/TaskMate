import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task.model';



@Injectable({ providedIn: 'root' })
export class TaskService {
  private API = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> { return this.http.get<Task[]>(this.API); }
  add(task: Omit<Task, 'id'>): Observable<Task> { return this.http.post<Task>(this.API, task); }
  delete(id: number) { return this.http.delete<void>(`${this.API}/${id}`); }
}
