import React from "react";
import "./Honors.css";
import { Carousel } from "react-bootstrap";

function Honors() {
  return (
    <div className="honors">
      <h1>Our Achievements</h1>
      <p>
        We feel every academic season brings progress. Every student that takes
        one step ahead from where he/she started makes us feel proud and fulfils
        our vision with which we run this institution. We wish each and every
        one of our alumni the very best for their future endeavours.{" "}
      </p>

      <div className="honors_main">
        <div className="row">

          <div className="col">

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2016</div>
              <div className="card-body">
                <h5 className="card-title">Top Scorer</h5>
                <p className="card-text">
                  Our student Sanya Choudhary has scored 98% in XII Boards in the subject Maths
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2023</div>
              <div className="card-body">
                <h5 className="card-title">Legacy</h5>
                <p className="card-text">
                 Some of our students Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, libero have remained with us since when they joined its been 10 years 
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">
                  Students have shown massive improvement from where they began 
                  Student asdfghjkl asdfgh scored 65 in class 5 and rose upto 90 in class 8
                </p>
              </div>
            </div>

          </div>

          <div className="col">

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2023</div>
              <div className="card-body">
                <h5 className="card-title">Legacy</h5>
                <p className="card-text">
                Some of our students Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, libero have remained with us since when they joined its been 10 years 

                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Info card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            </div>

            <div className="col">

            <div className="card bg-dark mb-3">
              <div className="card-header">2020</div>
              <div className="card-body">
                <h5 className="card-title">Success</h5>
                <p className="card-text">
                Students have shown massive improvement from where they began 
                  Student asdfghjkl asdfgh scored 65 in class 5 and rose upto 90 in class 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at placeat eaque dolores, ut quo?
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">
                Students have shown massive improvement from where they began 
                  Student asdfghjkl asdfgh scored 65 in class 5 and rose upto 90 in class 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at placeat eaque dolores, ut quo?
                </p>
              </div>
            </div>

            </div>

          </div>
          </div>

      <div className="testimonials">
        <h2>STUDENT TESTIMONIALS</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="images/gallery/14.jpeg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="images/gallery/19.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="images/gallery/20.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Honors;
