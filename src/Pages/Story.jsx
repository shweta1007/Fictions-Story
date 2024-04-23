import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Story = () => {
    const BASE_URL = "https://ik.imagekit.io/dev24/";
    const[story, setStory] = useState([])
    const [data, setData] = useState([]);
    const location = useLocation()
    const state = location.state?.itm

    useEffect(()=>{
        getStoryDataApiCall()
    },[])

    useEffect(() => {
        apiCall();
    }, []);


    const getStoryDataApiCall = async() => {
        try{
            const data = await axios.get(`https://child.onrender.com/api/sciencefiction/${state?._id}`)
            setStory(data.data)
        }
        catch(err){
            console.log(err)
        }
    }

    const apiCall = async () => {
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
     <div style={{ background:"#060532"}}>
         <div className="text-center container fw-bold">
          <h1 className='text-primary pt-5'>The Lost City of <span className='text-white'>Future Earth</span></h1>       
          <div className='container my-5 d-flex justify-content-around '>
                      <Button style={{ backgroundImage: "linear-gradient(110deg, #9417d4, #318CE7)" }} className='px-5 py-3 fs-6 rounded-pill fw-bold'>World Explorer</Button>
                  <Button className='px-5 rounded-pill fw-bold text-white fs-6 py-3' variant="warning">Story Adventure</Button>
                  <Button className='px-5 rounded-pill fw-bold fs-6 py-3' variant="success">Brain Quest</Button>
          </div>
      </div>
          <div className="row justify-content-center">
              <div className="col-lg-3">
                      <Card 
                className="text-center align-items-center my-3"
                          style={{ filter: "contrast(0.5)", background: "#060532", border:"dashed 1px grey" }}
              >
                      <Card.Text className="text-white my-2 fs-5.5 fw-bold w-100">
                          {story?.Title}
                      </Card.Text>
                  <Card.Img
                    className="mt-2 mb-4"
                    style={{ width:'80%' , borderRadius: "5%" }}
                    variant="top"
                      src={`${BASE_URL}${story?.Image}`}
                  />
              </Card>
            </div>
              <div className="col-lg-8">
                  <div className="row ">
              {data?.map((itm) =>{
                return (
                    <>
                      { itm?.Title && itm?.Image && itm?.Status && <div className="col-lg-2">
                          <Card
                              className="text-center align-items-center my-3"
                                style={{ backgroundImage: "linear-gradient(110deg, rgb(100 9 146), rgb(18 78 86))"  }}
                          >
                              <Card.Img
                                  className="mt-2"
                                  style={{ width: "86%", borderRadius: "5%" }}
                                  variant="top"
                                  src={`${BASE_URL}${itm?.Image[0]}`}
                              />
                              <Card.Body>
                                  <Card.Text className="text-white fs-6 fw-bold w-100">
                                      {itm?.Title}
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </div>} 
                    </>
                )
              })}
                  </div>
              </div>
      </div>
    </div>
      </>

  )
}

export default Story;