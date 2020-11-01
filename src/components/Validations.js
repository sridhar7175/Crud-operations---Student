import Axios from "axios";
import React, { useState, useEffect } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    price: "",
    phone: "",
  });
  let [touched, setTouched] = useState({
    name: false,
    course: false,
    price: false,
    phone: false,
  });
  let onChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  let onBlur = (e) => {
    setTouched({
      ...student,
      [e.target.name]: true,
    });
  };

  let validate = () => {
    var errors = {};

    if (!student.name || student.name == "") {
      errors.name = "name is required";
    }

    if (!student.course || student.course == "") {
      errors.course = "course is required";
    }
    if (!student.price || student.price == "") {
      errors.price = "Price is required";
    }
    if (!student.phone || student.phone == "") {
      errors.phone = "Phone is required";
    }

    return {
      errors,
      isValid: Object.keys(errors).length == 0 ? true : false,
    };
  };

  var { errors, isValid } = validate();

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      name: student.name,
      course: student.course,
      price: student.price,
      phone: student.phone,
    };
    Axios.post("http://localhost:7000/api/createstudent", body)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(student);
  }, [student]);
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="name"
            className="mt-3"
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Name"
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
            name="course"
            className="mt-3"
            placeholder="Course"
            onBlur={onBlur}
            onChange={onChange}
          />
        </div>
        <div>
          {errors.course && touched.course == true && (
            <span style={{ color: "red" }}>Course is required</span>
          )}
        </div>
        <div>
          <input
            type="text"
            name="price"
            className="mt-3"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Price"
          />
        </div>
        <div>
          {errors.price && touched.price === true && (
            <span style={{ color: "red" }}>Price is required</span>
          )}
        </div>
        <div>
          <input
            type="text"
            name="phone"
            className="mt-3"
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Phone"
          />
        </div>
        <div>
          {errors.phone && touched.phone == true && (
            <span style={{ color: "red" }}>Phone is required</span>
          )}
        </div>
        <button onClick={onSubmit} className="mt-2 btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Student;
