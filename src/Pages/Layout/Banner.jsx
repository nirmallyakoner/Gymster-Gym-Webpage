import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { banner } from "../../Redux/Blogslice";
import { image1 } from "../../Redux/Helper";
import { Link } from "react-router-dom";

export default function Banner() {
  const { bannerData } = useSelector((state) => state.Blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(banner());
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // console.log(bannerData);
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src={`${image1(bannerData[0].image)}`}
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase">
                    {bannerData[0].subtitle}
                  </h5>
                  <h1 className="display-2 text-white text-uppercase mb-md-4">
                    {bannerData[0].title}
                  </h1>
                  <Link
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>

                  <Link
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src={`${image1(bannerData[1]?.image)}`}
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase">
                    {bannerData[1]?.subtitle}
                  </h5>
                  <h1 className="display-2 text-white text-uppercase mb-md-4">
                    {bannerData[1]?.title}
                  </h1>

                  <Link
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>

                  <Link
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src={`${image1(bannerData[2]?.image)}`}
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase">
                    {bannerData[2]?.subtitle}
                  </h5>
                  <h1 className="display-2 text-white text-uppercase mb-md-4">
                    {bannerData[2]?.title}
                  </h1>
                  <Link
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>

                  <Link
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </>
  );
}
