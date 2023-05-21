import React from "react";
import { Link } from "react-router-dom";
import Alba from "./../img/alba.svg";

const Navbar = () => {
  return (
    <div className="d-flex flex-row justify-content-between my-4  align-items-center">
      <div style={{ color: "#FFCE07" }}>
        <img src={Alba} alt="" />
      </div>
      <div className="d-flex justify-content-evenly">
        <Link className="mx-4 btn">
          <b>Service</b>
        </Link>
        <Link className="mx-4 btn">
          <b>About</b>
        </Link>
        <Link className="mx-4 btn">
          <b>Portofolio</b>
        </Link>
        <Link className="mx-4 btn">
          <b>Blog</b>
        </Link>
        <Link className="mx-4 btn">
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
          <b>Contact Us</b>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
