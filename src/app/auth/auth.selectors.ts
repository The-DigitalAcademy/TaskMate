import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(selectAuth, s => s.user);
export const selectAuthLoading = createSelector(selectAuth, s => s.loading);
export const selectAuthError = createSelector(selectAuth, s => s.error);

