import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { serviceDetails } from "../../Redux/ServiceSlice";
import { image1 } from "../../Redux/Helper";

export default function ServiceDetails() {
  const { id } = useParams();
  const { oneServiceDetails } = useSelector((state) => state.Service);
  const dispatch = useDispatch();
  // console.log(id);
  useEffect(() => {
    dispatch(serviceDetails(id));
  }, [id]);
  // console.log(oneServiceDetails);
  return (
    
    <>
  {/* About Start */}
  <div className="container-fluid p-5">
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100 rounded"
            src={image1(oneServiceDetails.image)}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="mb-4">
          <h5 className="text-primary text-uppercase">Book Your</h5>
          <h1 className="display-3 text-uppercase mb-0">{oneServiceDetails.service_name} Classes</h1>
        </div>
        {/* <h4 className="text-body mb-4">
          Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no
          labore lorem sit clita duo justo magna dolore
        </h4> */}
        <p className="mb-4">
        {oneServiceDetails.service_description}
            </p>
            <Link to={`/booknow/${oneServiceDetails._id}`} className="btn btn-primary py-3 px-5">
          Book Now
        </Link>
        {/* <div className="rounded bg-dark p-5">
          <ul className="nav nav-pills justify-content-between mb-3">
            <li className="nav-item w-50">
              <a
                className="nav-link text-uppercase text-center w-100 active"
                data-bs-toggle="pill"
                href="#pills-1"
              >
                About Us
              </a>
            </li>
            <li className="nav-item w-50">
              <a
                className="nav-link text-uppercase text-center w-100"
                data-bs-toggle="pill"
                href="#pills-2"
              >
                Why Choose Us
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-1">
              <p className="text-secondary mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
            <div className="tab-pane fade" id="pills-2">
              <p className="text-secondary mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  {/* About End */}
</>

  );
}
