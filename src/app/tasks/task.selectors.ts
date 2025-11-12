import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTasksState = createFeatureSelector<TaskState>('tasks');
export const selectAllTasks = createSelector(selectTasksState, state => state.tasks);
export const selectTasksLoading = createSelector(selectTasksState, state => state.loading);
