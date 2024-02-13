import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getblogdetails } from "../../Redux/Blogslice";
import { useParams } from "react-router-dom";
import { image1 } from "../../Redux/Helper";

export default function BlogDetails() {
  const { oneBlogDetails } = useSelector((state) => state.Blog);
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);
  useEffect(() => {
    dispatch(getblogdetails(id));
  }, [id]);
  // console.log(oneBlogDetails);
  return (
    <>
      {/* Blog Start */}
      <div className="container-fluid p-5">
        <div className="row g-5 mx-5">
          <div className="col-lg-8 m-5">
            {/* Blog Detail Start */}
            <div className="mb-5">
              <img
                className="img-fluid w-100 rounded mb-5"
                src={`${image1(oneBlogDetails.image)}`}
                alt=""
              />
              <h1 className="text-uppercase mb-4">{oneBlogDetails.title}</h1>
              <p>{oneBlogDetails.subtitle}</p>
              <p>{oneBlogDetails.content}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
    </>
  );
}
