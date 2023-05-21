import React from "react";
import Navbar from "../../Component/Navbar";
import img from "../../img/img";
import "./home.css";
import LineYellow from "../../img/lineYellow.svg";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Navbar
          service="#service"
          about="#about"
          portofolio="#portofolio"
          blog="#blog"
          contactus="#contactus"
          career="#career"
        />
      </div>

      <section
        id="service"
        style={{
          backgroundImage: `url(${img.home})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "65%",

          height: "90vh",
        }}
        className="d-flex align-items-center"
      >
        <div className="container d-flex flex-column align-items-start align-self-center">
          <span className="border border-dark mb-5">
            <h1 style={{ fontSize: "4vw" }}>
              <b>Build or scale up</b>
            </h1>
          </span>
          <h1 className="mb-5" style={{ fontSize: "4vw" }}>
            your development team
          </h1>
          <div className="d-flex mb-5">
            <img src={LineYellow} alt="" />
            <h3 className="px-3">in weeks, not months</h3>
          </div>
          <button
            className="btn px-5 py-4"
            style={{
              backgroundColor: "#FFCE07 ",
              borderRadius: "50px",
              fontSize: "25px",
            }}
          >
            <b>Book now</b>
          </button>
        </div>
      </section>

      <section id="about" className="container" style={{ height: "100vh" }}>
        <div className="container">
          <p style={{ color: "#C4C4C4" }}>Complete Package</p>
          <h1>
            <b>From product design to software contonuous delivery</b>
          </h1>
        </div>
        <div>
          <div className="d-flex flex-row">
            <span
              className="border border-warning col-4 m-2 rounded-4 p-4 d-flex flex-column align-items-start"
              style={{ height: "188px" }}
            >
              <img src={img.group6} alt="" />
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                Website development {"->"}
              </h4>
              <p className="text-start">
                Hight-performance website to reach out more your potential
                customers
              </p>
            </span>
            <span
              className="border  col-4 m-2 rounded-4 p-4 d-flex flex-column align-items-start"
              style={{ height: "188px" }}
            >
              <img src={img.mobileapp} alt="" />
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                Mobile apps development
              </h4>
              <p className="text-start">To accelerate your business process</p>
            </span>
            <span
              className="border  col-4 m-2 rounded-4 p-4 d-flex flex-column align-items-start"
              style={{ height: "188px" }}
            >
              <img src={img.digitalProduct} alt="" />
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                Digital product design
              </h4>
              <p className="text-start">
                Complete digital product creations from UX prototyping to final
                designs
              </p>
            </span>
          </div>
          <div className="d-flex flex-row">
            <span
              className="border col-4 m-2 rounded-4 p-4 d-flex flex-column align-items-start"
              style={{ height: "188px" }}
            >
              <img src={img.maintenance} alt="" />
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                Maintenance
              </h4>
              <p className="text-start">
                Make sure your digital environment keep online and updated
              </p>
            </span>
            <span
              className="border col-4 m-2 rounded-4 p-4 d-flex flex-column align-items-start"
              style={{ height: "188px" }}
            >
              <img src={img.cmsDev} alt="" />
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                CMS development
              </h4>
              <p className="text-start">
                You can update your website content yourself
              </p>
            </span>
            <span
              className="border border-white col-4 m-2 rounded-4 p-4 d-flex flex-column align-items-start"
              style={{ height: "188px" }}
            >
              <img src={img.payment} alt="" />
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                Integrated payment gateway
              </h4>
              <p className="text-start">
                Simplify he payment system with just one step
              </p>
            </span>
          </div>
        </div>
        <div className="d-flex flex-wrap my-5">
          <img src={img.aws} alt="" className="mx-5" />
          <img src={img.cloud} alt="" className="mx-5" />
          <img src={img.a} alt="" className="mx-5" />
          <img src={img.css} alt="" className="mx-5" />
          <img src={img.html} alt="" className="mx-5" />
          <img src={img.js} alt="" className="mx-5" />
          <img src={img.php} alt="" className="mx-5" />
          <img src={img.python} alt="" className="mx-5" />
          <img src={img.react} alt="" className="mx-5" />
          <img src={img.diamond} alt="" className="mx-5" />
          <img src={img.daun} alt="" className="mx-5" />
          <img src={img.mysql} alt="" className="mx-5" />
          <img src={img.pgsql} alt="" className="mx-5" />
          <img src={img.sqlserver} alt="" className="mx-5" />
        </div>
      </section>
      <div style={{ backgroundColor: "#272727" }}>
        <h1 className="container py-3 px-5" style={{ color: "#FFCE07" }}>
          Our Progress Comes with a Collaboration Between Creativity, Ideas, and
          Technology
        </h1>
        <div
          className=" container d-flex justify-content-between"
          style={{ color: "white" }}
        >
          <div>
            <h1>1000+</h1> <p>Designs</p>
          </div>
          <div>
            <h1>30+</h1>
            <p>Products</p>
          </div>
          <div>
            <h1>58+</h1>
            <p>Website Developments</p>
          </div>
        </div>
      </div>
      <section
        id="portofolio"
        className="container mt-2"
        style={{ height: "100vh" }}
      >
        <p style={{ color: "gray" }}>Portofolio</p>
        <h1>The software that we build takes our clients to the next level</h1>
        <div className="d-flex flex-row">
          <div
            style={{ height: "auto" }}
            className="card border-warning col-4 m-2 rounded-3 d-flex flex-column align-items-start"
          >
            <img
              className="col-12"
              src={img.imgPortofolio}
              alt=""
              style={{ height: "auto" }}
            />
            <div className="p-4">
              <p className="text-start" style={{ color: "gray" }}>
                Mobile apps
              </p>
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                ILIOS app (B2B E-commerce)
              </h4>
              <p className="text-start">
                Has a unique selling point where not all companies offer
                applications for sales, data collection and management.
              </p>
            </div>
          </div>
          <div
            className="card border-warning col-4 m-2 rounded-4 d-flex flex-column align-items-start"
            style={{ height: "auto" }}
          >
            <img
              className="card-img-top"
              src=""
              alt=""
              style={{ height: "auto", minHeight: "27vh" }}
            />
            <div className="p-4">
              <p className="text-start" style={{ color: "gray" }}>
                Website development
              </p>
              <h4 className="text-start" style={{ color: "#FFCE07" }}>
                Home and Living
              </h4>
              <p className="text-start">
                Albatech helps in creating a website catalog to ahow brand
                identify and information in accordance with vision and mission
                of Home and Living.
              </p>
            </div>
          </div>
          <div
            className="card col-4 m-2 border-warning rounded-4 d-flex flex-column align-items-start"
            style={{ height: "auto" }}
          >
            <img
              className="card-img-top"
              src=""
              alt=""
              style={{ height: "auto", minHeight: "27vh" }}
            />
            <div className="card-body">
              <p className="text-start" style={{ color: "gray" }}>
                Website development
              </p>
              <h4
                className="text-start card-title"
                style={{ color: "#FFCE07" }}
              >
                HIPPO
              </h4>
              <p className="text-start">
                Albatech help to create e-commerce and company profile for
                Hippo's Website with realtime transaction and integration with
                Payment Gateway to accept multi payment
              </p>
            </div>
          </div>
        </div>
        <button
          className="btn px-5 mt-5"
          style={{
            borderRadius: "50px",
            backgroundColor: "#FFCE07",
            padding: "20px",
          }}
        >
          <b>Learn more</b>
        </button>
      </section>
      <section
        id="blog"
        className="mb-5 "
        style={{
          backgroundImage: `url(${img.bgTestimonial})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          backgroundSize: "90%",

          height: "90vh",
        }}
      >
        <p style={{ color: "gray" }}>Testimonials</p>
        <h1>What client love in working with Albatech Team</h1>
        <div>
          <div>baris 1</div>
          <div>baris 2</div>
        </div>
      </section>
      <section id="@career" className="mb-5 container">
        <div
          id="myCarousel"
          className="carousel slide "
          data-ride="carousel"
          data-interval="0"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner d-flex justify-content-center">
            <div className="item">
              <div className="row">
                <div style={{ width: "22vh" }}>
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src={img.pag1} className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
                <div style={{ width: "22vh" }}>
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src={img.pag2} className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
                <div style={{ width: "22vh" }}>
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src={img.pag3} className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
                <div style={{ width: "22vh" }}>
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src={img.pag4} className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
                <div style={{ width: "22vh" }}>
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img src={img.pag5} className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span
            className="border border-dark rounded-4 d-flex flex-column p-5"
            style={{ backgroundColor: "#FFCE07" }}
          >
            <p>
              <b>Is software important for your business?</b>
            </p>
            <h1>Build it with Albatech</h1>
            <button
              className="py-3 d-flex align-self-center justify-content-center"
              style={{
                borderRadius: "50px",
                width: "300px",
                backgroundColor: "#FFCE07",
              }}
            >
              <b>Consultation Now</b>
            </button>
          </span>
        </div>
      </section>

      <footer id="contactus" className="container ">
        <hr />
        <div className=" d-flex flex-row">
          <div className="col-4 my-5">
            <img
              src={img.alba}
              alt=""
              className="d-flex align-items-start mb-5"
            />
            <p className="text-start mb-5">
              Albatch acts a corporate partnerto help digitize their business to
              accelerate trends in remote work
            </p>
            <div className="col-6 d-flex justify-content-between mb-5">
              <img src={img.FB} alt="" />
              <img src={img.Ig} alt="" />
              <img src={img.Linked} alt="" />
            </div>
          </div>
          <div className="col-4 my-5  text-start mx-4">
            <h1>
              <b>Website</b>
            </h1>
            <div>
              <p>About</p>
              <p>Service</p>
              <p>Portofolio</p>
              <p>Blog</p>
              <p>Career</p>
            </div>
          </div>
          <div className="col-4 my-5 text-start">
            <h1>
              <b>Contact</b>
            </h1>
            <div>
              <p>
                The Promience Blok 38D No.25 Jl. Jalur Sutera Barat, Alam
                Sutera, Kota Tangerang, Banten 15143
              </p>
              <p>
                <b>P : </b> +62 81 1889 3383
              </p>
              <p>
                <b>E : </b> info@albatech.id
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="d-flex justify-content-between"
          style={{ color: "gray" }}
        >
          <p>&copy;PT.Alba Digital Teknologi 2021 | All Rights Reserved</p>
          <p>Privacy policy | Terms of service</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
