// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Pages/Layout/Header";
import Footer from "./Pages/Layout/Footer";
import Home from "./Pages/Layout/Home";
import Blog from "./Pages/Layout/Blog";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Layout/Dashboard";
import { Suspense, useEffect } from "react";
import BlogDetails from "./Pages/Layout/BlogDetails";
import Services from "./Pages/Layout/Services";
import ServiceDetails from "./Pages/Layout/ServiceDetails";
import Trainer from "./Pages/Layout/Trainer";
import Testimonial from "./Pages/Layout/Testimonial";
import BookNow from "./Pages/Layout/BookNow";
import BookingList from "./Pages/Layout/BookingList";
import { useDispatch, useSelector } from "react-redux";
// import { Check_token } from "./Redux/Authslice";

function App() {
  const { isToggle } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const PrivateRoute = ({ children }) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/login" />
        {alert("Please login First")}
      </>
    );
  };
  // const dispatch = useDispatch();
  // const {isToggle} = useSelector(state => state.Auth)
  // useEffect(() => {
  //   dispatch(Check_token())
  // },[])

  const PublicRouteNames = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/blog",
      Component: <Blog />,
    },
    {
      path: "/blogdetails/:id",
      Component: <BlogDetails />,
    },
    {
      path: "/trainer",
      Component: <Trainer />,
    },
    {
      path: "/testimonial",
      Component: <Testimonial />,
    },
    {
      path: "/services",
      Component: <Services />,
    },
    {
      path: "/servicedetails/:id",
      Component: <ServiceDetails />,
    },
  ];

  const PrivateRouteNames = [
    {
      path: "/dashboard/:id",
      Component: <Dashboard />,
    },
    {
      path: "/dashboard",
      Component: <Dashboard />,
    },

    {
      path: "/booknow/:id",
      Component: <BookNow />,
    },
    {
      path: "/bookinglist/:id",
      Component: <BookingList />,
    },
  ];

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Router>
          <Header />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  exact
                  path={route.path}
                  key={index}
                  element={route.Component}
                />
              );
            })}

            {PrivateRouteNames?.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route.Component}</PrivateRoute>}
                  key={index}
                />
              );
            })}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
