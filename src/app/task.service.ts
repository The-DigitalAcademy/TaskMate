import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.tasks);

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task) {
    task.id = new Date().getTime();
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id ===updatedTask.id);
    if (index > -1){
      this.tasks[index] =updatedTask;
      this.tasksSubject.next(this.tasks);
    }
  }
 
  deleteTask(id: number){
    this.tasks = this.tasks.filter(t => t.id !==id);
    this.tasksSubject.next(this.tasks);
  }

}
