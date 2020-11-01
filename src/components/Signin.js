import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getSigninUser } from "../redux/Actions/signinaction";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const Signin = async () => {
    await props.onLoginUser(email, password);
    history.push("/");
    // let body = {
    //   email: values.email,
    //   password: values.password,
    // };
    // Axios.post("http://localhost:7000/api/signin", body)
    //   .then((res) => {
    //     console.log("signup", res.data);
    //     localStorage.setItem("userId", res.data._id);
    //     history.push("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="container mt-5">
      <h4>
        <b>SignIn</b>
      </h4>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="formcontrol1 mt-2 pl-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="formcontrol1 mt-2 pl-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={Signin} className="btn btn-danger mt-2 formcontrol1">
        SignIn
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.signInUsers,
  };
};
var mapDispatchToProps = {
  getSigninUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
