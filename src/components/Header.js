import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSigninUser, getSignOut } from "../redux/Actions/signinaction";

const Header = (props) => {
  //var x = localStorage.getItem("userId");
  //console.log("abc", x);

  console.log("aaaaaaaa", props?.signInUsers?.user?._id);

  async function handleSignOut() {
    props.getSignOut();
    //props.removeCartItems();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            Student
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
              {props?.signInUsers?.user?._id ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/studentDetails">
                      StudentDetails
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/signin"
                      onClick={() => handleSignOut()}
                    >
                      SignOut
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/signin">
                      Signin
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signInUsers: state.signInUsers,
  };
};
var mapDispatchToProps = {
  getSigninUser,
  getSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
