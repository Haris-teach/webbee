/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import {combineReducers} from 'redux';

import machineSlice from './machineSlice';

const rootReducer = combineReducers({
  machineSlice,
});

export default rootReducer;
