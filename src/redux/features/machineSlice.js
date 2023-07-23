/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

const initialState = {
  allMachines: [],
  bullDozer: [],
  temp: [],
};

export const machineSlice = createSlice({
  name: 'machineSlice',

  initialState,
  reducers: {
    setAllMachines: (state, action) => {
      state.allMachines.push(action.payload);
    },
    removeMachine: (state, action) => {
      state.allMachines = action.payload;
    },
    addAttribute: (state, action) => {
      state.allMachines[action.payload.index][action.payload.i] =
        action.payload.i;
    },
    deleteObjKey: (state, action) => {
      delete state.allMachines[action.payload.index][action.payload.key];
    },
    updateKeyValue: (state, action) => {
      state.allMachines[action.payload.index][action.payload.key] =
        action.payload.text;
    },
    setMachinebyName: (state, action) => {
      let t = action.payload;

      let temp = state.allMachines.filter(
        i => i.Category.toLowerCase() == t.toLowerCase(),
      );

      state.bullDozer = temp;
    },
    setNewArray: (state, action) => {
      const myObject = {};

      action.payload.map((i, index) => {
        let t = 'bull Dozer';
        if (i.toLowerCase() == t.toLowerCase()) {
        } else {
          myObject[i] = '';
        }
      });
      state.temp.push(myObject);
    },
    getAll: (state, action) => {
      state.allMachines = state.temp;
    },
  },
});

export const {
  setAllMachines,
  removeMachine,
  addAttribute,
  deleteObjKey,
  updateKeyValue,
  setMachinebyName,
  setNewArray,
  getAll,
} = machineSlice.actions;

export default machineSlice.reducer;
