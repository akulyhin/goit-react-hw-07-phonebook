import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  setFilter,
  addTaskSuccess,
  fetchTasksSuccess,
  removeTasksSuccess,
} from "../actions/todoActions";

const onAddTask = (state, action) => [
  ...state,
  { ...action.payload, ...action.payload.items },
];

const onDeleteTask = (state, action) => [
  ...state.filter((item) => item.id !== action.payload),
];

const onFilter = (state, action) => action.payload;

const contactsReducer = createReducer([], {
  [addTaskSuccess]: onAddTask,
  [fetchTasksSuccess]: (state, action) => action.payload,
  [removeTasksSuccess]: onDeleteTask,
});

const filterReducer = createReducer("", {
  [setFilter]: onFilter,
});

const reducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

export default reducer;
