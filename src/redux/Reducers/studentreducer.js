import {
  GET_STUDENT_ERROR,
  GET_STUDENT_STARTED,
  GET_STUDENT_SUCCESS,
} from "../Actions/studentaction";

export const studentReducer = (state = {}, action) => {
  // console.log(action)
  switch (action.type) {
    case GET_STUDENT_STARTED:
      return {
        students: [],
        loading: true,
        error: null,
      };
    case GET_STUDENT_SUCCESS:
      //console.log(action)
      return {
        students: action.students,
        loading: false,
        error: null,
      };
    case GET_STUDENT_ERROR:
      return {
        students: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
