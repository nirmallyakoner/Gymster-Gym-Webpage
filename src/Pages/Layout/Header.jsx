import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Token_remove } from "../../Redux/Authslice";

export default function Header() {
  const { isToggle } = useSelector((state) => state.Auth);
  const id = localStorage.getItem("_id");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Token_remove());
  };

  return (
    <div>
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <a
              href="index.html"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 className="m-0 display-4 text-primary text-uppercase">
                Gymster
              </h1>
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row gx-0 bg-secondary d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                  <i className="fa fa-envelope text-primary me-2" />
                  <h6 className="mb-0">info@example.com</h6>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2">
                  <i className="fa fa-phone-alt text-primary me-2" />
                  <h6 className="mb-0">+012 345 6789</h6>
                </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                <div className="d-inline-flex align-items-center py-2">
                  {/* Social media links */}
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
              <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  Gymster
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link">
                    Home
                  </Link>
                  <Link to="/blog" className="nav-item nav-link">
                    Blog
                  </Link>
                  <Link to="/services" className="nav-item nav-link">
                    Services
                  </Link>
                  <Link to={`/dashboard/${id}`} className="nav-item nav-link">
                    Dashboard
                  </Link>

                  {isToggle ? (
                    <Link onClick={handleLogout} to="/" className="nav-item nav-link">
                      {" "}
                      LogOut
                    </Link>
                  ) : (
                    <Link to="/login" className="nav-item nav-link">
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
