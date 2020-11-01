import {
  SIGN_IN_STATRED,
  SIGN_IN_SUCCESS,
  GET_SIGNOUT,
} from "../Actions/signinaction";

export var signInUsers = (state = {}, action) => {
  //console.log(action);
  switch (action.type) {
    case SIGN_IN_STATRED:
      return {
        user: [],
        loading: true,
        error: null,
      };
    case SIGN_IN_SUCCESS:
      // console.log(action, "action");
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    // case GET_LOGIN_FAILED:
    //   return {
    //     loading: false,
    //     error: action.payload.message,
    //     ...state,
    //   };
    case GET_SIGNOUT:
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
};
