import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { services } from "../../Redux/ServiceSlice";
import { image1 } from "../../Redux/Helper";
import { Link } from "react-router-dom";

export default function Services() {
  const { serviceDetails } = useSelector((state) => state.Service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(services());
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // console.log(serviceDetails);
  return (
    <>
      {/* Programe Start */}
      <div
        className="container-fluid programe position-relative px-5 mt-5"
        style={{ marginBottom: 180 }}
      >
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">Services</h5>
          <h1 className="display-3 text-uppercase mb-0">We offer you</h1>
        </div>
        <div className="row g-5 gb-5">
          {serviceDetails?.map((i, index) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="bg-light rounded text-center p-5">
                  {/* <i className="flaticon-six-pack display-1 text-primary" /> */}
                  <img
                    className="img-fluid"
                    src={`${image1(i.image)}`}
                    alt=""
                  />
                  <h3 className="text-uppercase my-4">{i.service_name}</h3>
                  <p>{truncate(i.service_description, 100)}</p>
                  <Link
                    className="text-uppercase"
                    to={`/servicedetails/${i._id}`}
                  >
                    Book Now <i className="bi bi-arrow-right" />
                  </Link>
                  {/* <a className="text-uppercase" href="">
                  Read More <i className="bi bi-arrow-right" />
                </a> */}
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4">Weight Lefting</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="text-uppercase" href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-bodybuilding display-1 text-primary" />
          <h3 className="text-uppercase my-4">Muscle Building</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="text-uppercase" href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div> */}
          {/* <div className="col-lg-12 col-md-6 text-center">
        <h1 className="text-uppercase text-light mb-4">
          30% Discount For This Summer
        </h1>
        <a href="" className="btn btn-primary py-3 px-5">
          Become A Member
        </a>
      </div> */}
        </div>
      </div>
      {/* Programe Start */}
    </>
  );
}
