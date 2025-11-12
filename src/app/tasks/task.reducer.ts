import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { Task } from '../task.model';

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, state => ({ ...state, loading: true })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, loading: false, tasks })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(TaskActions.addTaskSuccess, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(TaskActions.deleteTask, (state, { id }) => ({ ...state, tasks: state.tasks.filter(task => task.id !== id) }))
);
