export const SIGN_IN_STATRED = "SIGN_IN_STATRED";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";

export const GET_SIGNOUT = "GET_SIGNOUT";

export function signInStarted() {
  return {
    type: SIGN_IN_STATRED,
  };
}

export function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user.data,
  };
}

export function signInFailed(err) {
  return {
    type: SIGN_IN_FAILED,
    err,
  };
}

//Thunk Action
export function getSigninUser(email, password) {
  var user = { email, password };
  //console.log(user, JSON.stringify(user), "user");
  return (dispatch) => {
    fetch("http://localhost:7000/api/signin", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((res) => {
        // console.log(res, "res");
        if (!res) {
          return dispatch({
            type: SIGN_IN_FAILED,
            payload: res,
          });
        } else {
          return dispatch({
            type: SIGN_IN_SUCCESS,
            payload: res,
          });
        }
      })
      .catch((error) => {});
  };
}

export function getSignOut(error) {
  return {
    type: GET_SIGNOUT,
    error,
  };
}
