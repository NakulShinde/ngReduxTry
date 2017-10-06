import * as SelectedDeviceActions from '../actions/selected-device.actions';
import { SelectedDeviceObj }         from '../models/selected-device.model';

export type Action = SelectedDeviceActions.All;

const defaultState : SelectedDeviceObj = null;

/// Helper function to create new state object
const newState = (state, newData) => {
  var updatedState = Object.assign({}, state, newData);
  // var updatedState = [...state, ...newData]
  console.log('New State', updatedState);
  return updatedState;
}
/// Reducer function
export function selectedDeviceReducer(state: SelectedDeviceObj = defaultState, action: Action) {
  console.log(action.type, state);

	switch (action.type) {
  		case SelectedDeviceActions.ADD:
         
         	return newState({}, action.payload);
      	case SelectedDeviceActions.CLEAR:
        	return newState({}, {});
		default:
			return state;
	}
}