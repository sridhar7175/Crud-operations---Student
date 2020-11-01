import Axios from "axios";
export const GET_STUDENT_STARTED = "GET_STARTED_STUDENT";
export const GET_STUDENT_SUCCESS = "GET_SUCCESS_STUDENT";
export const GET_STUDENT_ERROR = "GET_ERROR_STUDENT";

export function getStudentStarted() {
  return {
    type: GET_STUDENT_STARTED,
  };
}

export function getStudentSuccess(students) {
  return {
    type: GET_STUDENT_SUCCESS,
    students,
  };
}
export function getStudentError(err) {
  return {
    type: GET_STUDENT_ERROR,
    err,
  };
}

//Thunk Action
export function getStudents() {
  return (dispatch) => {
    dispatch(getStudentStarted());
    Axios.get("http://localhost:7000/api/getstudents").then((res) => {
      //console.log("res", res.data);
      dispatch(getStudentSuccess(res.data));
    });
    // .catch((err) => {
    //   dispatch(getProductsFailed(err));
    // });
  };
}
