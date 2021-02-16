import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  removeTask,
  setFilter,
  addTaskSuccess,
  fetchTasksSuccess,
  removeTasksSuccess,
} from "../actions/todoActions";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

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
