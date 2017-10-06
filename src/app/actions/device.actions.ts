import { Action } from '@ngrx/store';

export const ADD     = '[Device] Add';
export const CLEAR   = '[Device] Clear';
export const DEFAULT   = '[Device] Default';

export class Add implements Action {
  readonly type = ADD;
}
export class Clear implements Action {
  readonly type = CLEAR;
}
export class Default implements Action {
  readonly type = DEFAULT;
}
export type All = Add | Clear | Default;
