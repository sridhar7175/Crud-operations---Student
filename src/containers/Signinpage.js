import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSigninUser } from "../redux/Actions/signinaction";
import Header from "../components/Header";
import Signin from "../components/Signin";
import Footer from "../components/Footer";

const Signinpage = (props) => {
  console.log("allprops", props);
  // useEffect(() => {
  //   if (props.user?.user?.details?._id) {
  //     props.history.push("/");
  //   } else {
  //     console.log("user not logged in");
  //   }
  // }, [props]);
  async function handleLoginUser(username, password) {
    await props.getSigninUser(username, password);
    //console.log(props, "props after login");
  }

  return (
    <div>
      <Header />
      <Signin
        user={props.user}
        onLoginUser={(username, password) =>
          handleLoginUser(username, password)
        }
      />
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Signinpage);
