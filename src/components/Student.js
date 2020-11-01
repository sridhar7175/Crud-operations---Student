import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    price: "",
    phone: "",
  });
  let history = useHistory();

  let onChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      name: student.name,
      course: student.course,
      price: student.price,
      phone: student.phone,
    };
    Axios.post("http://localhost:7000/api/createstudent", body)
      // .then((res) => console.log(res))
      .then((res) => {
        //console.log(res);
        //window.location.href = "/";
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   console.log(student);
  // }, [student]);
  return (
    <div>
      <h5 className="mt-3 mb-2">
        <b>Student Details</b>
      </h5>
      <form>
        <div>
          <input
            type="text"
            name="name"
            className="mt-3 formcontrol1"
            onChange={onChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="course"
            className="mt-3 formcontrol1"
            placeholder="Course"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            className="mt-3 formcontrol1"
            onChange={onChange}
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            className="mt-3 formcontrol1"
            onChange={onChange}
            placeholder="Phone"
          />
        </div>
        <button onClick={onSubmit} className="mt-2 btn btn-danger formcontrol1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Student;
