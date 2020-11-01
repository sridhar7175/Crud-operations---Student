import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    price: "",
    phone: "",
  });
  const id = window.location.pathname.slice(14);
  const history = useHistory();

  let onChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  console.log(window.location.pathname.slice(14));

  const getStudentData = () => {
    //  console.log("abbbbb", id);
    Axios.get(`http://localhost:7000/api/getonestudent/${id}`)
      .then((res) => {
        console.log("res", res.data);
        const details = res.data[0];
        console.log(details);
        setStudent(details, ...student.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudentData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    let body1 = {
      name: student.name,
      course: student.course,
      price: student.price,
      phone: student.phone,
    };

    Axios.put(`http://localhost:7000/api/updatestudent/${id}`, body1)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h5 className="mt-3 ">
        <b>Update the Student</b>
      </h5>
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={student.name}
            className="mt-3 formcontrol1"
            onChange={onChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="course"
            value={student.course}
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
            value={student.price}
            onChange={onChange}
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            className="mt-3 formcontrol1"
            value={student.phone}
            onChange={onChange}
            placeholder="Phone"
          />
        </div>
        <button
          className="mt-2 btn btn-success formcontrol1"
          onClick={onSubmit}
        >
          UpdateStudent
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
