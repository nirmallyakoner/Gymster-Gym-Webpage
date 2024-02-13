import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookinglist, trainer } from "../../Redux/ServiceSlice";
import { useParams } from "react-router-dom";
import { image1 } from "../../Redux/Helper";

export default function BookingList({ userId }) {
  const { bookinglistdata } = useSelector((state) => state.Service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookinglist(userId));
  }, [userId]);
  // console.log(bookinglistdata);

  const { trainerDetail } = useSelector((state) => state.Service);
  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trainer());
  }, []);
  // console.log(trainerDetail);

  return (
    <div id="tab-1" className="tab-pane fade show p-0 active m-5">
      <div className="mb-5 text-center">
        <h5 className="text-primary text-uppercase">DashBoard</h5>
        <h1 className="display-3 text-uppercase mb-0">Your bookings</h1>
      </div>

      <div className="row g-5">
        {bookinglistdata?.map((i) => {
          const matchedTrainer = trainerDetail.find(
            (trainer) => trainer._id === i.serviceId?.trainerId
          );

          return (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="bg-dark rounded text-center py-5 px-3">
                <img
                  className="img-fluid"
                  src={image1(i.serviceId?.image)}
                  alt=""
                />
                <h5 className="text-uppercase text-primary">
                  {i.serviceId?.service_name}
                </h5>
                <p className="text-uppercase text-secondary mb-0">
                  Trainer: {matchedTrainer ? matchedTrainer.name : "Unknown"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
