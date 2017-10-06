import * as DeviceActions from '../actions/device.actions';
import { Device, DeviceObj }         from '../models/device.model';

export type Action = DeviceActions.All;
const defaultData : DeviceObj = {
        refUid: "12300000-0000-0000-0000-000000000003 --default",
        refName: "Device Name--default",
        refObjectType: "vs_device",
        refVsomUid: "39932eac-e9eb-48d5-8fef-393f1e1b8938"
    }
/// Default app state
const defaultState: Device = [
    defaultData
];

/// Helper function to create new state object
const newState = (state, newData) => {
  // var updatedState = Object.assign({}, state, newData);
  var updatedState = [...state, ...newData]
  console.log('New State', updatedState);
  return updatedState;
}
/// Reducer function
export function deviceReducer(state: Device = defaultState, action: Action) {
  console.log(action.type, state);

	switch (action.type) {
  		case DeviceActions.ADD:
         
         var newData = [] as Device;
         
         for (var i = state.length ; i < (state.length+100); i++) {
           
            var data = {
              refUid: "12300000-0000-0000-0000-000000000003--"+i,
              refName: "Device Name -- "+i,
              refObjectType: "vs_device",
              refVsomUid: "39932eac-e9eb-48d5-8fef-393f1e1b8938"        
            } as DeviceObj;
            newData.push(data)
         }
         console.log('newData', newData);

  			return newState(state, newData);
      case DeviceActions.CLEAR:
        return newState([], []);
  		case DeviceActions.DEFAULT:
  			return newState(state, defaultState);
  		default:
  			return state;
	}
}