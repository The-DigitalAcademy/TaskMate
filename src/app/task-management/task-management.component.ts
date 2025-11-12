import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit{
  taskForm: FormGroup;
  tasks: Task [] = [];
  editMode: boolean = false;
  editTaskId: number | null = null;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit():void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  submitTask(){
    if (this.taskForm.invalid) return;

    if (this.editMode) {
      const updatedTask: Task = {
        id: this.editTaskId!,
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: false
      };
      this.taskService.updateTask(updatedTask);
      alert('Task updated succesfully!');
    } else {
      const newTask: Task = {
        id: 0,
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: false
      };
      this.taskService.addTask(newTask);
      alert('Task added succesfully!');
    }

    this.taskForm.reset();
    this.editMode = false;
    this.editTaskId = null;
  }

  editTask(task: Task) {
    this.editMode =true;
    this.editTaskId = task.id;
    this.taskForm.patchValue({
      title: task.title,
      description: task.description
    });
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id);
    alert('Task deleted successfully!');
  }
}
