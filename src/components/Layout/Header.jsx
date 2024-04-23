import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import brainyLogo from '../../assets/brainyLogo.png'

const Header = () => {
  const location = useLocation()
  
  const headerStyle = {
    backgroundImage: location?.pathname === '/'
      && 'url("https://cdnb.artstation.com/p/assets/images/images/006/783/887/large/matt-gaser-level-3masterfile-1.jpg?1501208934")', 
    backgroundColor: location?.pathname === '/story'
      ? '#060532'
      : '#060532' 
  };

  return (
    <>
      <div style={{ ...headerStyle,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
        }}>
      <div className="container p-3 d-flex justify-content-between">
        <Link className="d-flex" style={{textDecoration:"none"}} to="/">
            <img src={brainyLogo} alt="logo" height={20} width={25} className="mx-2 mt-2" />
        <h5  style={{color:"white", alignSelf:"center"}}>BrainyLogo</h5>
        </Link>
        <div>
          <ul className="d-flex mt-2 " style={{ listStyleType: "none" }}>
            <li className="mx-3 fw-bold">
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li className="mx-3 fw-bold">
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Leaderboard
              </Link>
            </li>
            <li className="mx-3 fw-bold">
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Daily Quiz
              </Link>
            </li>
              <li className="mx-3 text-secondary fw-bold">
                  Genre
              </li>
          </ul>
        </div>
          <Button style={{ backgroundImage: "linear-gradient(110deg, #9417d4, #007FFF)" }} className="px-4 py-2 fw-bold rounded-pill">
          Sign Out
        </Button>
      </div>
        {location?.pathname === '/' ? <div
          className="text-center fw-bold"
        >
          <div className="py-5">
            <h1 className="text-white">Science Finction Stories</h1>
            <div className="container my-5 d-flex justify-content-around ">
              <Button className="px-5 fs-6 py-3 rounded-pill fw-bold" variant="primary">
                New
              </Button>
              <Button
                className="px-5 fs-6 py-3 rounded-pill fw-bold text-white"
                variant="warning"
              >
                In Progress
              </Button>
              <Button className="px-5 fs-6 py-3 rounded-pill fw-bold" variant="success">
                Completed
              </Button>
              <Button
                className="px-5 fs-6 py-3 rounded-pill fw-bold text-white"
                style={{ backgroundImage: "linear-gradient(110deg, #9417d4, #007FFF)" }}
                variant="info"
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>: null}
      </div>
    </>
  );
};

export default Header;
