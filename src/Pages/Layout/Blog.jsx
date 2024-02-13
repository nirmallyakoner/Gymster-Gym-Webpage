import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogSlice, blog } from "../../Redux/Blogslice";
import { image1 } from "../../Redux/Helper";
import { Link } from "react-router-dom";

export default function Blog() {
  const { blogs } = useSelector((state) => state.Blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blog());
  }, []);
  // console.log(blogs);
  return (
    // <div>
    //   <div className="container-fluid service py-6">
    //     <div className="container">
    //       <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
    //         <h1 className="display-5 mb-5">What We Offer</h1>
    //       </div>
    //       <div className="row g-4">
    //         {blogs?.map((i) => {
    //           return (
    //             <div
    //               className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
    //               data-wow-delay="0.1s"
    //             >
    //               <div className="bg-light rounded service-item">
    //                 <div className="service-content d-flex align-items-center justify-content-center p-4">
    //                   <div className="service-content-icon text-center">
    //                     <img
    //                       class="card-img-top border border-dark "
    //                       style={{
    //                         objectFit: "cover",
    //                         height: "200px",
    //                         width: "250px",
    //                         borderRadius: "15px 15px 0 0",
    //                       }}
    //                       alt="..."
    //                       src={image1(i.image)}
    //                     />
    //                     <h4 className="mb-3 mt-2">{i.title}</h4>

    //                     <Link to={`/blogdetails/${i._id}`}>Know More</Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      {/* Blog Start */}
      <div className="container-fluid p-5">
        <div className="mb-5 text-center">
          <h5 className="text-primary text-uppercase">Our Blogs</h5>
          <h1 className="display-3 text-uppercase mb-0">
            Enhance Your Knowledge Here
          </h1>
        </div>
        <div className="row g-5">
          {/* Blog list Start */}
          <div className="col-lg-12">
            <div className="row g-5">
              {blogs?.map((i, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <div className="blog-item">
                      <div
                        className="position-relative overflow-hidden rounded-top "
                        style={{ objectFit: "contain", height: "240px" }}
                      >
                        <img
                          className="img-fluid"
                          src={`${image1(i.image)}`}
                          alt=""
                        />
                      </div>
                      <div
                        className="bg-dark d-flex align-items-center rounded-bottom p-4"
                        style={{ height: "100px" }}
                      >
                        <Link
                          className="h5 text-uppercase text-light"
                          to={`/blogdetails/${i._id}`}
                        >
                          {i.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Blog list End */}
        </div>
      </div>
      {/* Blog End */}
    </>
  );
}
