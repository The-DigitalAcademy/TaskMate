
import { AuthState } from '../auth/auth.reducer';
import { TaskState } from '../tasks/task.reducer';

export interface AppState {
  auth: AuthState;
  tasks: TaskState;
}
