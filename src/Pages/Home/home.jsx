import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const BASE_URL = "https://ik.imagekit.io/dev24/";
  const [data, setData] = useState([]);

  useEffect(() => {
    getStoriesApiCall();
  }, []);

  const getStoriesApiCall = async () => {
    try {
      const data = await axios.get(
        "https://child.onrender.com/api/sciencefiction"
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        style={{
          background: '#060532'
        }}
        className="py-5"
      >
        <div  className="container">
          <div className="justify-content-center row">
            {data?.map((itm) => {
              return(
                <>
                 {itm?.Title && itm?.Image && itm?.Status &&
                  <div className="col-lg-3">
                    <Card
                      className="text-center align-items-center my-3"
                      style={{ backgroundImage: "linear-gradient(110deg, #9417d4, #318CE7)" }}>
                      <Link to={`/story/${itm?._id}`} state={{ itm: itm }}>
                        <Card.Img
                          className="mt-2"
                          style={{ width: "86%", borderRadius: "5%" }}
                          variant="top"
                          src={`${BASE_URL}${itm?.Image[0]}`}
                        />
                      </Link>
                      <Card.Body>
                        <Card.Text className="text-white fs-5.5 fw-bold w-100">
                          {itm?.Title}
                        </Card.Text>
                        <Button
                          className="w-100"
                          style={{
                            background: "white",
                            border: "none",
                            fontWeight: "bold",
                            color:
                              itm?.Status === "In Progress" ? "#ebbf2d" :
                                itm?.Status === "New" ? "#0ba091" :
                                  itm?.Status === "Completed" ? "#19bb19" :
                                    "#ebbf2d"
                          }}
                        >
                          {itm?.Status}
                        </Button>

                      </Card.Body>
                    </Card>
                  </div>}
                </>
              )
          
})}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
