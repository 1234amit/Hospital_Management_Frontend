// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// const Spinner = ({ path = "login" }) => {
//     const [count, setCount] = useState(3);
//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCount((prevValue) => --prevValue);
//         }, 1000);
//         count === 0 &&
//             navigate(`/${path}`, {
//                 state: location.pathname,
//             });
//         return () => clearInterval(interval);
//     }, [count, navigate, location, path]);
//     return (
//         <>
//             <div
//                 className="d-flex flex-column justify-content-center align-items-center"
//                 style={{ height: "100vh" }}
//             >
//                 <h1 className="Text-center">redirecting to you in {count} second </h1>
//                 <div className="spinner-border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Spinner;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center">Redirecting to you in {count} seconds</h1>
      <div className="spinner border-4 border-lightRed rounded-full border-t-8 border-b-8 h-20 w-20 mt-4"></div>
      {/* The above classes create a circular spinner with Tailwind CSS */}
      <h1 className="Text-center">redirecting to you in {count} second </h1>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  );
};

export default Spinner;
