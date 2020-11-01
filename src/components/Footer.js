import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-3 mb-3">
      <footer className="page-footer font-small bg-dark">
        <div className="footer-copyright text-center py-3 text-white">
          © 2020 Copyright:
          <Link to="/"> Student.com</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
