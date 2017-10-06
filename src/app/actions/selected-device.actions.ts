import { Action } from '@ngrx/store';

export const ADD     = '[SelectedDevice] Add';
export const CLEAR   = '[SelectedDevice] Clear';

export class Add implements Action {
  readonly type = ADD;
  /// user a constructor to send a payload with the action
  constructor(public payload: object) {}
}
export class Clear implements Action {
  readonly type = CLEAR;
}
export type All = Add | Clear;
