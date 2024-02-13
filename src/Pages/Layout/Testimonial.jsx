import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testimonial } from "../../Redux/ServiceSlice";
import { image1 } from "../../Redux/Helper";

export default function Testimonial() {
  const { testimonialData } = useSelector((state) => state.Service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(testimonial());
  }, []);
  // console.log(testimonialData);
  return (
    
    <div>
      <div id="tab-1" className="tab-pane fade show p-0 active m-5">
      <div className="mb-5 text-center">
      <h5 className="text-primary text-uppercase">testimonial</h5>
      <h1 className="display-3 text-uppercase mb-0">Our client say</h1>
    </div>
        <div className="row g-5">
          {testimonialData?.map((i, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div className="bg-dark rounded text-center py-5 px-3" style={{height:"550px"}}>
                  <img
                    className="img-fluid"
                    src={image1(i.image)}
                    alt=""
                  />
                  {/* <h6 className="text-uppercase text-light mb-3">{i.client_n</h6> */}
                  <h5 className="text-uppercase text-primary pt-3">
                  {i.client_name}
                  </h5>
                  <p className="text-uppercase text-secondary mb-0">
                  { i.review}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
