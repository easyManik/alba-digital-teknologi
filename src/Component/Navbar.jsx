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
        <a className="mx-4 btn" href={service}>
          <b>Service</b>
        </a>
        <a className="mx-4 btn" href={about}>
          <b>About</b>
        </a>
        <a className="mx-4 btn" href={portofolio}>
          <b>Portofolio</b>
        </a>
        <a className="mx-4 btn" href={blog}>
          <b>Blog</b>
        </a>
        <a className="mx-4 btn" href={career}>
          <b>Career</b>
        </a>
      </div>
      <div>
        <button
          className="btn px-5"
          style={{
            backgroundColor: "#FFCE07",
            borderRadius: "50px",
          }}
          onClick={contactus}
        >
          <b>Contact Us</b>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
