import React from "react";
import "./Honors.css";
import { Carousel } from "react-bootstrap";

function Honors() {
  return (
    <>
    <div className="color-section"></div>
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
                  Our student Sanya Choudhary has scored 96% in XII Boards in the subject Maths and was named the school topper
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2023</div>
              <div className="card-body">
                <h5 className="card-title">Legacy</h5>
                <p className="card-text">
                 3 months Crash Course turned C grade and D grade students to A grade students in both Maths and Science over subsequent years
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2019</div>
              <div className="card-body">
                <h5 className="card-title">Top Scorer</h5>
                <p className="card-text">
                  Our student Yusra was the school topper of XII Boards in the subject Physics
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2019</div>
              <div className="card-body">
                <h5 className="card-title">Top Scorer</h5>
                <p className="card-text">
                  In 4 months span, Geet, an IGCSE student completed 9th and 10th intgerated course with us and scored A grade 
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
                Our student Katherine enrolled for our 15-day Crash Course and within 15 days secured more than 85%

                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2018</div>
              <div className="card-body">
                <h5 className="card-title">Top Scorer</h5>
                <p className="card-text">
                Our student Parth Trivedi scored 96% in XII Boards in the subject Maths, was named the school topper and featured in Times of India

                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2019</div>
              <div className="card-body">
                <h5 className="card-title">Top Scorer</h5>
                <p className="card-text">
                  Our ICSE students, Rishit, Lokesh and Aradhrika were 98%-100% scorers consistently in all subjects from grade 8th to 12th.
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2023</div>
              <div className="card-body">
                <h5 className="card-title">Success</h5>
                <p className="card-text">
                Many students joined us in smaller classes like 7th to 8th and stayed with us till their 12th. 
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
                Students that joined after COVID have shown massive improvement from where they began.<br/> 
                Huzefa, Tanishq, Arjun, Mithil, Zoesha, Satvik, Yusuf, Rishona, Ishaan, Yashika, Kabir, Hiral, Riyan, Farhan, <br/> These students joined us after the COVID-19 lockdown and showed growth from 85% to 100% and graduated with flying colors            </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2023</div>
              <div className="card-body">
                <h5 className="card-title">Success</h5>
                <p className="card-text">
                One of our Ashray scored 93% in Chemistry XII Boards through our online sessions. 
                </p>
              </div>
            </div>

            <div className="card text-white bg-dark mb-3">
              <div className="card-header">2023</div>
              <div className="card-body">
                <h5 className="card-title">Success</h5>
                <p className="card-text">
                Our Online batches during COVID-19 lockdown never compromised with knowledge and effort for our students and students were well prepared and confident to face the offline exams after the long break 
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
              src="images/testimonials/1t (1).jpeg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="images/testimonials/1t (2).jpeg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="images/testimonials/1t (3).jpeg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Honors;
