import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trainer } from "../../Redux/ServiceSlice";
import { image1 } from "../../Redux/Helper";

export default function Trainer() {
  const { trainerDetail } = useSelector((state) => state.Service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trainer());
  }, []);
  // console.log(trainerDetail);
  return (
    <>
      {/* Team Start */}
      <div className="container-fluid p-5">
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">The Team</h5>
          <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div className="row g-5">
          {trainerDetail?.map((i, index) => {
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="team-item position-relative">
                  <div
                    className="position-relative overflow-hidden rounded"
                    style={{ height: "480px" }}
                  >
                    <img
                      className="img-fluid w-100 "
                      src={`${image1(i.image)}`}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="d-flex align-items-center justify-content-start">
                        <a
                          className="btn btn-light btn-square rounded-circle mx-1"
                          href="#"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          className="btn btn-light btn-square rounded-circle mx-1"
                          href="#"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          className="btn btn-light btn-square rounded-circle mx-1"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                    style={{ background: "rgba(34, 36, 41, .9)" }}
                  >
                    <h5 className="text-uppercase text-light">{i.name}</h5>
                    <p className="text-uppercase text-secondary m-0">
                      {i.speciality}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
            <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
            style={{ background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-uppercase text-light">James Taylor</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
            <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
            style={{ background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-uppercase text-light">Adam Phillips</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
            <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
            style={{ background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-uppercase text-light">John Deo</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
            <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
            style={{ background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-uppercase text-light">James Taylor</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded">
            <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
            style={{ background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-uppercase text-light">Adam Phillips</h5>
            <p className="text-uppercase text-secondary m-0">Trainer</p>
          </div>
        </div>
      </div> */}
        </div>
      </div>
      {/* Team End */}
    </>
  );
}
