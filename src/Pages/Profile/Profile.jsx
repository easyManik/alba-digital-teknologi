import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApp } from "../Redux/Action/login";
import { profileApp } from "../Redux/Action/profile";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState([]);
  let user = `https://reqres.in/api/login`;

  useEffect(() => {
    axios
      .get(user)
      .then((res) => {
        console.log("success");
        console.log(res);
        res.data.data && setData(res.data.data[0]);
      })
      .catch((e) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    const result = axios.get(`https://reqres.in/api/login`, data);
    const user = result.data;
    console.log(user);
  });
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div>
        <h1>id = {data.id}</h1>
      </div>
    </div>
  );
};

export default Profile;
