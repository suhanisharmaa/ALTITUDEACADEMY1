import React from "react";
import Flipcard from "./Flipcard";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <div className="home_img">
        <img className="mySlides" src="images/homeimg.jpeg" alt="" />
        <button><a href="#down">KNOW MORE</a></button>
      </div>

      <h2 className="top_h" id="down">
        Here is the base to scale your heights!
        <br />A place to learn, grow and win
      </h2>
      <p className="top_para">
        Each student is different, learns differently and grows differently. We
        at <strong>Altitude Academy</strong> want each child to flourish in his
        or her own way, without having to take academic stress. We push the
        students to work to the best of their abilities. We mould the students
        to build confidence have no exam fear and enjoy the subjects with our
        experienced faculty.
      </p>

      <div className="steps_main">
        <h2>What makes us Different? </h2>
        <div className="steps">
          <div className="steps_left">
            <h3 className="steps_heading">1. Result Oriented :</h3>
            <p className="steps_content">
              We believe in working hard but learning smart. Each of our student
              is analyzed and given a schedule curated according to his/her
              needs
            </p>
            <h3 className="steps_heading">2. Counselling :</h3>
            <p className="steps_content">
              We have regular counselling sessions for students and parents so
              students can learn with the right attitude, move forward with
              confidence and feel good about their acheivements
            </p>
            <h3 className="steps_heading">3. PTMs :</h3>
            <p className="steps_content">
              Constant Update calls with Parents so parents can track their
              growth too
            </p>

            {/* <p>Keep logging in for biweekly uploads</p> */}

            {/* <button>
              <Link to="/studymaterial">Study Material</Link>
            </button> */}
          </div>

          <div className="steps_right">
            <img src="images/stepsf.png" alt="" />
          </div>
        </div>
      </div>

      <div className="why">
        <h2>Why Altitude Academy?</h2>
        <div className="whys">
          <div className="why_option">
            <img src="images/study.png" alt="" className="why_img" />
            <div className="why_content">Concept driven teaching</div>
          </div>

          <div className="why_option">
            <img src="images/studying.png" alt="" className="why_img" />
            <div className="why_content">Customized Approach</div>
          </div>

          <div className="why_option">
            <img src="images/studying (1).png" alt="" className="why_img" />
            <div className="why_content">Parents and Students Counselling</div>
          </div>

          <div className="why_option">
            <img src="images/reading.png" alt="" className="why_img" />
            <div className="why_content">Experienced faculty</div>
          </div>

          <div className="why_option">
            <img src="images/learning.png" alt="" className="why_img" />
            <div className="why_content">Individual Attention</div>
          </div>
        </div>
      </div>

      <div className="courses_bar">
        <h2>Courses we offer at Altitude Academy</h2>
        <p>
          Check out our curated course structures
          <br />
          Enrol Today!
        </p>

        <div className="courses_card">
          <div className="container">
            {/* <div className="row justify-content-md-center">
            <Card title="CRASH COURSE" description="Oct-Dec and Jan-Mar"/>
            <Card title="MPC" description="3 days a week multiple batches"/>
            <Card title="BiPC" description="3 days a week multiple batches"/>
            </div>
            <div className="row justify-content-md-center">
            <Card title="VI-X" description="All Subjects, All Branches"/>
            <Card title="I-V" description="All Subjects"/>
            <Card title="EXAM BATCH" description="Maths Coaching for competitive exams"/>
            </div> */}
            <div className="row">

              <div class="col-md-4">
                <div class="content">
                  
                    <div class="content-overlay"></div>{" "}
                    <img class="content-image" src="images/home/4.jpg" />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">CRASH COURSE</h3>
                      <p class="content-text">
                        <i class="fa fa-map-marker"></i> Oct-Dec & Jan-Mar
                      </p>
                    </div>
                  
                </div>
              </div>

              <div class="col-md-4">
                <div class="content">
                 
                    <div class="content-overlay"></div>{" "}
                    <img class="content-image" src="images/home/3.webp" />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">MPC</h3>
                      <p class="content-text">
                        <i class="fa fa-map-marker"></i> 3 days a week multiple batches
                      </p>
                    </div>
                  
                </div>
              </div>

              <div class="col-md-4">
                <div class="content">
                  
                  
                    <div class="content-overlay"></div>{" "}
                    <img class="content-image" src="images/home/7.jpg" />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">BiPC</h3>
                      <p class="content-text">
                        <i class="fa fa-map-marker"></i> 3 days a week multiple batches
                      </p>
                    </div>
                  
                </div>
              </div>

            </div>

              <div className="row">
                <div class="col-md-4">
                  <div class="content">
                    
                      <div class="content-overlay"></div>{" "}
                      <img class="content-image" src="images/home/5.jpg" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">VI-X</h3>
                        <p class="content-text">
                          <i class="fa fa-map-marker"></i> All Subjects, All Branches
                        </p>
                      </div>
                    
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="content">
                    
                      <div class="content-overlay"></div>{" "}
                      <img class="content-image" src="images/home/6.jpg" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">I-V</h3>
                        <p class="content-text">
                          <i class="fa fa-map-marker"></i> All Subjects
                        </p>
                      </div>
                   
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="content">
                    
                      <div class="content-overlay"></div>{" "}
                      <img class="content-image" src="images/home/2.jpg" />
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">EXAM BATCH</h3>
                        <p class="content-text">
                          <i class="fa fa-map-marker"></i> Maths Coaching for competitive exams
                        </p>
                      </div>
                    
                  </div>
                </div>


            </div>
          </div>
        </div>
      </div>

      <div className="love">
        <h2>Happy Parents and Students</h2>
        <div className="carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/Screenshot (486).png"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/Screenshot (487).png"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/Screenshot (488).png"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <button>
          <Link to="/reviews">Reviews by our students➡️</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
