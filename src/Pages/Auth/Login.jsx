import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Authslice";

export default function Login() {
  const { status } = useSelector((state) => state.Auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginId = useSelector((state) => state.Auth.loginId);
  console.log(loginId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "email") {
      setUser({ ...user, email: value });
    }
    if (name === "password") {
      setUser({ ...user, password: value });
    }
  };

  const SubmitInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (user.email !== "" && user.password !== "") {
      formData.append("email", user.email);
      formData.append("password", user.password);
      dispatch(login(formData)).then((e) => {
        if (e.payload.status === 200) {
          // console.log("navigate");
          navigate(`/dashboard/${loginId}`);
        }
      });
    }
  };
  return (
    <div>
      <div className="container p-5 ">
        <div className="mb-5 text-center">
          <h1 className="display-3 text-uppercase mb-0">
            {" "}
            <span className="text-primary text-uppercase">Login</span> Here
          </h1>
        </div>

        <div className="row g-0 d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="bg-dark p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Email"
                      name="email"
                      value={user.email}
                      onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Password"
                      name="password"
                      value={user.password}
                      onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-12">
                    {status == "loading" ? (
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        onClick={SubmitInfo}
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        onClick={SubmitInfo}
                      >
                        Login
                      </button>
                    )}
                  </div>
                  <div className="col-12 text-center ">
                    <span style={{ color: "white" }}>Not Registered? </span>
                    <Link to="/register">Register Here</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
