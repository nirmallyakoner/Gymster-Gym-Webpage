import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { booking, serviceDetails } from "../../Redux/ServiceSlice";

export default function BookNow() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id, "id");
  const username = localStorage.getItem("name");
  const useremail = localStorage.getItem("email");
  const userId = localStorage.getItem("_id");
  // console.log(username);

  const [user, setUser] = useState({
    name: "",
    email: "",
    memberId: "",
    serviceId: "",
    service_name: "",
    scheme: "",
    price: "",
  });
  const { oneServiceDetails, status } = useSelector((state) => state.Service);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(serviceDetails(id));
  }, [id]);

  useEffect(() => {
    setUser({
      service_name: oneServiceDetails.service_name,
      name: username,
      email: useremail,
      memberId: userId,
      serviceId: id,
    });
  }, []);

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "scheme") {
      setUser({ ...user, scheme: value });
    }
    if (name === "price") {
      setUser({ ...user, price: value });
    }
  };

  const SubmitInfo = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("memberId", user.memberId);
    formData.append("serviceId", user.serviceId);
    formData.append("scheme", user.scheme);
    formData.append("price", user.price);
    dispatch(booking(formData)).then((e) => {
      if (e.payload.status === 200) {
        navigate(`/dashboard/${user.memberId}`);
      }
    });
  };

  // console.log(user);

  // console.log(oneServiceDetails.service_name, "onedetails");
  return (
    <div>
      <div className="container p-5 ">
        <div className="mb-5 text-center">
          {/* <h5 className="text-primary text-uppercase">Contact Us</h5> */}
          <h1 className="display-3 text-uppercase mb-0">
            {" "}
            <span >Book</span> <span className="text-primary text-uppercase">{user.service_name}</span> <span>Classes</span>
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
                      // onChange={PostUserData}
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
                      // onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Scheme"
                      value={user.scheme}
                      onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Enter Your Price "
                      name="price"
                      onChange={PostUserData}
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-12">
                   
                    {status == "loading" ?  <Link
                      to={`/bookinglist/${user.memberId}`}
                      onClick={SubmitInfo}
                      className="btn btn-primary w-100 py-3"
                    >
                      Loading...  
                    </Link>:<Link
                      to={`/bookinglist/${user.memberId}`}
                      onClick={SubmitInfo}
                      className="btn btn-primary w-100 py-3"
                    >
                      Book Now
                    </Link>}
                  </div>
                  <div className="col-12 text-center ">
                    <span style={{ color: "white" }}>
                      Track Your Bookings.{" "}
                    </span>
                    <Link to={`/dashboard/${userId}`}>Click Here</Link>
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
