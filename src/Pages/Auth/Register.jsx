import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../Redux/Authslice";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    answer: "",
  });
  const dispatch = useDispatch();

  const [img, setImg] = useState();
  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "name") {
      setUser({ ...user, name: value });
    }
    if (name === "email") {
      setUser({ ...user, email: value });
    }
    if (name === "phone") {
      setUser({ ...user, phone: value });
    }
    if (name === "password") {
      setUser({ ...user, password: value });
    }
    if (name === "answer") {
      setUser({ ...user, answer: value });
    }
  };

  const SubmitInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (
      user.name !== "" &&
      user.email !== "" &&
      user.phone !== "" &&
      user.password !== "" &&
      user.answer !== "" &&
      img !== ""
    ) {
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("password", user.password);
      formData.append("answer", user.answer);
      formData.append("image", img);
      dispatch(register(formData));
    }
  };
  // console.log(user);
  return (
    <div>
      {/* Contact Start */}
      <div className="container p-5 ">
        <div className="mb-5 text-center">
          {/* <h5 className="text-primary text-uppercase">Contact Us</h5> */}
          <h1 className="display-3 text-uppercase mb-0">
            {" "}
            <span className="text-primary text-uppercase">Register</span> Here
          </h1>
        </div>

        <div className="row g-0 d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="bg-dark p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Name"
                      name="name"
                      value={user.name}
                      onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>
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
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Phone"
                      name="phone"
                      value={user.phone}
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
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Answer"
                      name="answer"
                      value={user.answer}
                      onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="file"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Answer"
                      name="image"
                      onChange={(e) => setImg(e.target.files[0])}
                      accept="image/*"
                      style={{ height: 38 }}
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      onClick={SubmitInfo}
                    >
                     Register
                    </button>
                  </div>
                  <div className="col-12 text-center ">
                     <span style={{color:"white"}}>Already Registered? </span>
                     <Link to="/login">Login Here</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}
