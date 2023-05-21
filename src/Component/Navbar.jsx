import React from "react";
import { Link } from "react-router-dom";
import Alba from "./../img/alba.svg";

const Navbar = (service, about, portofolio, blog, contactus, career) => {
  return (
    <div className="d-flex flex-row justify-content-between my-4  align-items-center">
      <div style={{ color: "#FFCE07" }}>
        <Link to="/profile">
          <img src={Alba} alt="" />
        </Link>
      </div>
      <div className="d-flex justify-content-evenly">
        <Link
          className="mx-4"
          style={{ textDecoration: "none", color: "black" }}
          to={service}
        >
          <b>Service</b>
        </Link>
        <Link
          className="mx-4 "
          style={{ textDecoration: "none", color: "black" }}
          to={about}
        >
          <b>About</b>
        </Link>
        <Link
          className="mx-4  "
          style={{ textDecoration: "none", color: "black" }}
          to={portofolio}
        >
          <b>Portofolio</b>
        </Link>
        <Link
          className="mx-4  "
          style={{ textDecoration: "none", color: "black" }}
          to={blog}
        >
          <b>Blog</b>
        </Link>
        <Link
          className="mx-4  "
          style={{ textDecoration: "none", color: "black" }}
          to={career}
        >
          <b>Career</b>
        </Link>
      </div>
      <div>
        <button
          className="btn px-5"
          style={{
            backgroundColor: "#FFCE07",
            borderRadius: "50px",
          }}
        >
          <a
            href={contactus}
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>Contact Us</b>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
