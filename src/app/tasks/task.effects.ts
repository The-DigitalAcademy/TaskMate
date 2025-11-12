import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TaskActions from './task.actions';
import { TaskService } from './task.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private tasks: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.tasks.getAll().pipe(
          map(tasks => TaskActions.loadTasksSuccess({ tasks })),
          catchError(err => of(TaskActions.loadTasksFailure({ error: err.message })))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap(({ task }) =>
        this.tasks.add(task).pipe(
          map(newTask => TaskActions.addTaskSuccess({ task: newTask })),
          catchError(err => of(TaskActions.addTaskFailure({ error: err.message })))
        )
      )
    )
  );
}
