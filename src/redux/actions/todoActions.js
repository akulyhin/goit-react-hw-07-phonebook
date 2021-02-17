import { createAction } from "@reduxjs/toolkit";

const addTaskRequest = createAction("tasks/addRequest");
const addTaskSuccess = createAction("tasks/addSuccess");
const addTaskError = createAction("tasks/addError");

const fetchTasksRequest = createAction("tasks/fetchRequest");
const fetchTasksSuccess = createAction("tasks/fetchSuccess");
const fetchTasksError = createAction("tasks/fetchError");

const removeTasksRequest = createAction("tasks/removeRequest");
const removeTasksSuccess = createAction("tasks/removeSuccess");
const removeTasksError = createAction("tasks/removeError");

const setFilter = createAction("tasks/filter");

export {
  setFilter,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  removeTasksRequest,
  removeTasksSuccess,
  removeTasksError,
};
