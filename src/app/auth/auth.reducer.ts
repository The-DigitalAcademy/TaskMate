import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../models/user.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: ""
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, state => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, loading: false, user })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(AuthActions.register, state => ({ ...state, loading: true, error: null })),
  on(AuthActions.registerSuccess, (state, { user }) => ({ ...state, loading: false, user })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, loading: false, error })),
)