import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Studentpage from "./containers/Studentpage";
import EditStudentPage from "./containers/EditStudentPage";
import HomePage from "./containers/HomePage";
import Homepage1 from "./containers/Homepage1";
import AboutPage from "./containers/AboutPage";
import SignupPage from "./containers/SignupPage";
import Signinpage from "./containers/Signinpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={Homepage1} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/signin" component={Signinpage} />
          <Route exact path="/studentDetails" component={Studentpage} />
          <Route exact path="/student/edit/:id" component={EditStudentPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
