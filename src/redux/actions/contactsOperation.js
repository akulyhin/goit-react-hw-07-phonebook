import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  removeTasksRequest,
  removeTasksSuccess,
  removeTasksError,
} from "./todoActions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000";

const addTask = (items) => (dispatch) => {
  dispatch(addTaskRequest());

  axios
    .post("/contacts", { items })
    .then(({ data }) => dispatch(addTaskSuccess(data)))
    .catch((error) => dispatch(addTaskError(error)));
};

const fetchTasks = () => (dispatch) => {
  dispatch(fetchTasksRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchTasksSuccess(data)))
    .catch((error) => dispatch(fetchTasksError(error)));
};

const removeTask = (id) => (dispatch) => {
  dispatch(removeTasksRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeTasksSuccess(id)))
    .catch((error) => dispatch(removeTasksError(error)));
};

export { addTask, fetchTasks, removeTask };
