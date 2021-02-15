import { createAction } from "@reduxjs/toolkit";

const addTaskRequest = createAction("tasks/addRequest");
const addTaskSuccess = createAction("tasks/addSuccess");
const addTaskError = createAction("tasks/addError");

const fetchTasksRequest = createAction("tasks/fetchRequest");
const fetchTasksSuccess = createAction("tasks/fetchSuccess");
const fetchTasksError = createAction("tasks/fetchError");

const removeTask = createAction("tasks/remove");
const setFilter = createAction("tasks/filter");

export {
  removeTask,
  setFilter,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
};
