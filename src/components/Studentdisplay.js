import Axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getStudents } from "../redux/Actions/studentaction";
import { Link } from "react-router-dom";

const Studentdisplay = (props) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    props.getStudents();
  }, []);

  const DeleteStudent = (student) => {
    Axios.delete(`http://localhost:7000/api/removestudent/${student}`).then(
      (res) => {
        // console.log(res);
        props.getStudents();
      }
    );
  };
  console.log("alldata", props?.studentReducer?.students);
  console.log("name", props?.studentReducer?.students?.name);
  const filternames = props?.studentReducer?.students?.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log("photo", props?.studentReducer?.students[0]?.photo?.contentType);

  return (
    <div className="mt-3 container mb-5">
      <h5 className="mb-3">
        <b>Student Data</b>
      </h5>
      <form>
        <input
          type="text"
          name="name"
          className="formcontrol1 mt-2 mb-5 pl-3"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <table className="table-sm table  table-bordered ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Price</th>
            <th>Phone</th>
            <th>Photo</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filternames?.map((student) => {
            console.log("aaaaaaa", student.photo.contentType);
            return (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.price}</td>
                <td>{student.phone}</td>
                <td>
                  <img src={`image/jpeg;base64,${student.photo.data.data}`} />
                </td>
                <td>
                  <Link
                    className="btn btn-success"
                    to={`/student/edit/${student._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => DeleteStudent(student._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
var mapStateToProps = (state) => {
  return {
    studentReducer: state.studentReducer,
  };
};

var mapDispatchToProps = {
  getStudents,
};
export default connect(mapStateToProps, mapDispatchToProps)(Studentdisplay);
