import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { taskReducer } from '../tasks/task.reducer';
import { authReducer } from '../auth/auth.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  tasks: taskReducer
};
