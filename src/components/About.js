import React from "react";
import "./About.css";
import { Carousel } from "react-bootstrap";
import CallIcon from "@material-ui/icons/Call";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="overview">
        <div className="overview_content">
          <div className="overview_heading">
            <h1>
              <strong>OUR STORY</strong>
            </h1>
          </div>
          <div className="cardd">
            <div className="overview_text">
              <h3>HOW WE STARTED</h3>
              Our Founder, Shweta Sharma has been teaching ever since she was a
              student. She has had an experience of around 25 years in the
              education field. Her forte being Mathematics, she aimed to conquer
              the 'fear of Maths' from every child that came to her. Having a deep passion for her work and her subject felt that teaching methods needed a change to fit the evolving mindset of modern students. Her
              creative method of teaching, helped her to do so, build concepts
              from bottom-up in the child's mind as well as get the child hooked
              to the subject. With this Vision in mind, was established ALTITUDE
              ACADEMY in the year 2015. Started only with a handful of students,
              Altitude Academy now has a community of students, teachers, alumni
              that have forever taken a piece in Altitude Academy's story.
              <h3>OUR MISSION</h3>
              Our vision is to nurture the students to explore their full
              potential so as to boost their self-confidence and morale. Our
              mission is to provide the best education to every student, help him/her to learn and achieve academic success.
              We aim to help all students achieve their potential by giving them
              encouragement, understanding and individualised attention. We
              strive to raise our students’ aspiration, make them dream higher and acheive more by
              infusing them with enthusiasm for the subject, self-confidence,
              motivation and direction.
            </div>
          </div>
        </div>
      </div>

      <div className="teachers">
        <h2>OUR TEACHERS</h2>

        <div className="teacher_option">
          <div className="teacher_left">
            <img src="images/shweta.jpeg" alt="" />
            <div className="p">
              <p>SHWETA SHARMA</p>
            </div>
          </div>
          <div className="teacher_right">
            <h2>OUR FOUNDER</h2>
            <p>
              A visionary, leader and pioneer, Ms Shweta is the driving force of Altitude Academy. Bringing in a new way of teaching, one in which she analyzes each child's strengths and weaknesses and provides them a concept based learning path, curated differently for everyone. She believes in instilling quality knowledge in a structured manner rather than quantity knowledge, and this is what makes her students fall in love with her subject, Mathematics. Her experience of more than 25 years and interactive classes really bring out a child's true potential. Her constant counselling sessions with both parents and students strengthen their trust in Altitude Academy. The institute still lights up with students coming after years to share their acheivements and that is the true fulfillment of a little dream she saw many years ago, that is Altitude Academy's true victory. 
            </p>
          </div>
        </div>

        <div className="teacher_option">
          <div className="teacher_left">
            <img src="images/jyothi.jpeg" alt="" />
            <div className="p">
              <p>JYOTHI MA'AM</p>
            </div>
          </div>

          <div className="teacher_right">
            <h2>OUR PILLAR OF STRENGTH</h2>
            <p>
              Ms Jyothi, a founding member of Altitude Academy, has been the institute's pillar of  strength since day one. She is a B.Sc and B.Ed in Science. Jyothi ma'am specializes in multiple domains, Science, Languages, Primary Classes Subjects, Handwriting being some. Her sweet demeanor and unmatchable patience attracts children of all ages towards her. She has worked with several students as they transform from average to bright and that is her strength, her forte. She has levelled up Science at Altitude Academy by acheiving incredible results year after year. She is absolutely dynamic in her ways and surely one of a kind.
            </p>
          </div>
        </div>

        <div className="section_2">
          <h2>OUR FACULTY</h2>
          <div className="teachers_section">
            
            <div className="card-decks">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="images/teachers/shweta.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">SHWETA SHARMA</h5>
                  <p className="card-text">
                    Ms Shweta brings out best results and improvement in Maths for students of CBSE, ICSE, IB, Cambridge Boards and works with teachers to curate a course plan for each student.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Maths Faculty since 2015</small>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/teachers/d.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">JYOTHI</h5>
                  <p className="card-text">
                    Ms. Jyothi has been consistent in bringing amazing results in X Science Boards since years and has expertise in handling multiple subjects of middle school students. 
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">All Subjects Faculty since 2015</small>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/teachers/durga.jpeg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">DURGA</h5>
                  <p className="card-text">
                    PhD in Chemistry, Ma'am has taught many students and brought amazing results in X/XII Boards, NEET, ICSE, even during difficult times of COVID-19.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Chemistry Faculty 2019-2022</small>
                </div>
              </div>
            </div>

            <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src="images/teachers/premila maam.jpeg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">PREMILA MA'AM</h5>
                  <p className="card-text">
                    It is an honor for Altitude Academy to be associated with ex principle of Kendriya Vidyalaya who enriched students with her excellence in Chemistry.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Chemistry Faculty 2017-2019</small>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/teachers/deepa.jpeg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">DEEPA</h5>
                  <p className="card-text">
                    Having an excellent grip and years of experience of one of the most vast subjects, Deepa Ma'am makes Physics concepts crystal-clear and unforgettable for students 
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Physics Faculty from 2018</small>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="images/teachers/english_1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">ENGLISH MA'AM</h5>
                  <p className="card-text">
                    Experienced as Vice Principle and Head of English Department for many years, Ma'am worked with junior and senior students with patience and graced the academy with her loving nature.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">English Faculty 2016-2018</small>
                </div>
              </div>
              </div>
              </div>
            

          </div>
        </div>

        <div className="photos">
          <h2>HAPPY MOMENTS AT ALTITUDE ACADEMY</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/gallery/m_1 (1).jpeg"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/gallery/m_1 (3).jpeg"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-80"
                src="images/gallery/m_1 (2).jpeg"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <div className="carousel">//Photos Carousel//</div> */}
          <button>
            <Link to="/gallery">Gallery➡️</Link>
          </button>
        </div>

        <div className="details">
          <div className="map">
            <h2>LOCATE US</h2>

            <div className="map_img">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5917055136624!2d78.49106841408747!3d17.479245604751814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a8bdc9193b9%3A0x87fe6e004ebb35ae!2sAltitude%20Academy%20Coaching%20and%20Tutoring!5e0!3m2!1sen!2sin!4v1655317673494!5m2!1sen!2sin"></iframe>
            </div>
            <h3>
              Altitude Academy, Manasarovar Heights Road, Near Ushodaya
              Supermarket, Trimulgherry, Secunderabad, 500009
            </h3>
          </div>
        </div>

        <div className="contact">
          <h2>CONTACT US</h2>
          <div className="container">
            <div className="row justify-content-md-center ab">
              <div className="col-4">
                <a href="tel:9391035332" target="_blank" rel="noreferrer"  >
                  <CallIcon />
                </a>
              </div>
              <div className="col-4">
                <a href="mailto:altitudeacademy9.com" target="_blank" rel="noreferrer"  >
                  <MailIcon />
                </a>
              </div>
              <div className="col"></div>
              <div className="col">
                <a
                  href="https://www.instagram.com/altitude_academy/?hl=en"
                  target="_blank" rel="noreferrer" 
                >
                  <InstagramIcon />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://www.facebook.com/altitudeacademyhyd/"
                  target="_blank" rel="noreferrer"  
                >
                  <FacebookIcon />
                </a>
              </div>
              <div className="col"></div>
            </div>
            <div className="row justify-content-md-center ab">
              <div className="col">
                <h3>BY PHONE</h3>
                <p>+919391035332</p>
              </div>
              <div className="col">
                <h3>MAIL US</h3>
                <p>altitudeacademy9@gmail.com</p>
              </div>
              <div className="col">
                <h3>SOCIALS</h3>
                <p>Our social media handles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
