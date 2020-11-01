import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });
  const history = useHistory();
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  let onBlur = (e) => {
    setTouched({
      ...values,
      [e.target.name]: true,
    });
  };

  let validate = () => {
    var errors = {};

    if (!values.name || values.name == "") {
      errors.name = "Name is required";
    }

    if (!values.email || values.email === "") {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Enter a Valid Email";
    }

    if (!values.password || values.password === "") {
      errors.password = "Password is required";
    }

    return {
      errors,
      isValid: Object.keys(errors).length == 0 ? true : false,
    };
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  var { errors, isValid } = validate();

  const Signup = () => {
    let body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    Axios.post("http://localhost:7000/api/signup", body)
      .then((res) => {
        console.log("signup", res);
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
    setValues("");
  };

  return (
    <div className="container mt-5">
      <h4>
        <b>SignUp</b>
      </h4>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="formcontrol1 mt-2 pl-2"
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <div>
        {errors.name && touched.name == true && (
          <span style={{ color: "red" }}>Name is required</span>
        )}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="formcontrol1 mt-2 pl-2"
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <div>
        {errors.email && touched.email == true && (
          <span style={{ color: "red" }}>Email is required</span>
        )}
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="formcontrol1 mt-2 pl-2"
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <div>
        {errors.password && touched.password == true && (
          <span style={{ color: "red" }}>Password is required</span>
        )}
      </div>
      <button
        onClick={Signup}
        disabled={!isValid}
        className="btn btn-danger mt-2 formcontrol1"
      >
        SignUp
      </button>
    </div>
  );
};

export default Signup;
