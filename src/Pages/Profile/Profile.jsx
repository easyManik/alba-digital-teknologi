import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import axios from "axios";
import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Profile = () => {
  const [data, setData] = useState([]);
  let user = `https://reqres.in/api/login?per_page=12`;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(user)
      .then((res) => {
        console.log("success");
        console.log(res);
        res.data.data && setData(res.data.data);
      })
      .catch((e) => {
        console.log("error");
      });
  }, [user]);

  const handleLogout = async () => {
    await localStorage.clear();
    swal({
      title: "Log Out",
      text: `Log Out Success`,
      icon: "success",
    });
    navigate("/");
  };

  return (
    <div className="container mb-5">
      <div>
        <Navbar />
      </div>
      <div className=" my-5 d-flex flex-row justify-content-between">
        <button className="btn  mx-5" style={{ backgroundColor: "#FFCE07" }}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            <b>Page Home</b>
          </Link>
        </button>
        <button
          onClick={handleLogout}
          className="btn mx-5"
          style={{ backgroundColor: "#FFCE07" }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            <b>Log Out</b>
          </Link>
        </button>
      </div>
      <h1 style={{ color: "#ebc321" }}>
        <b>PROFILE</b>
      </h1>
      <hr />
      <div>
        <table className="contentTable text-start">
          <thead style={{ color: "#FFCE07" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Color</th>
              <th>Pantone Value</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((product) => (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.year}</td>
                  <td>
                    <span
                      className="border p-2"
                      style={{
                        backgroundColor: `${product.color}`,

                        borderRadius: "50px",
                      }}
                    >
                      {product.color}
                    </span>
                  </td>
                  <td>{product.pantone_value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
