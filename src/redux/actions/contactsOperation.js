import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
} from "./todoActions";
import axios from "axios";

const addTask = (items) => (dispatch) => {
  dispatch(addTaskRequest());

  axios
    .post("http://localhost:2000/contacts", { items })
    .then(({ data }) => {
      console.log(data);
      dispatch(addTaskSuccess(data));
    })
    .catch((error) => dispatch(addTaskError(error)));
};

const fetchTasks = () => (dispatch) => {
  dispatch(fetchTasksRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(fetchTasksSuccess(data)))
    .catch((error) => dispatch(fetchTasksError(error)));
};

export { addTask, fetchTasks };
