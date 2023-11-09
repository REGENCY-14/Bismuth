import Slider from "./slideshow";

const Homepage = () => {
  return (
    <div className="Home">
      <div className="first-part">
        <img src="/intro.jpg" alt="" />
        <div className="textonimage">
          <h2>
            Empowering Young Minds<br></br>Through STEM Innovation
          </h2>
          <p>
            Through the power of STEM innovation, we inspire and enable young{" "}
            <br></br>minds to explore, create, and overcomee challenges,
            equipping them with the <br /> kills and mindset to become future
            problem solvers and trailblazers
          </p>
          <button className="availableCourses">SEE AVAILABLE COURSES</button>
          {/* <div className="innersection">
                  
              </div> */}
        </div>
      </div>
      <>
        <div className="second-part">
          <h2>
            <span>Build.</span> <span>Code.</span> <span>Innovate</span>
          </h2>
          <br />
          <br />
          <p>
            At BitLabs, our mission is to ignite a passion for learning in young
            minds through engaging and interactive <br /> STEM (Science,
            Technology, Engineering, and Mathematics) innovations. We are
            dedicated to providing hands-on,
            <br /> practical experiences that not only nurture creativity and
            critical thinking but also aim to cultivate a strong <br />
            foundation of essential skill sets necessary for navigating the
            challenges of the modern world. Our holistic <br />
            approach to education fosters an environment where students can
            explore, experiment, and develop a deep <br /> understanding of
            various scientific and technological concepts, empowering them to
            become confident <br /> problem-solvers and innovative thinkers.
          </p>
        </div>
      </>
      <div className="grid">
        <div className="box-1">
          <div className="text">
            <h2>Robotics Workshop</h2>
            {/* <p>
              We organize hands-on workshops where children can learn the basics
              of robotics, build their own robots, and program them to perform
              specific tasks or challenges.
            </p> */}
          </div>
        </div>
        <div className="box-2">
          <div className="text">
            <h2>Collaborative Challenges</h2>
          </div>
        </div>
        <div className="box-3">
          <div className="text">
            <h2>Maker Activities</h2>
          </div>
        </div>
        <div className="box-4">
          <div className="text">
            <h2>Entrepreneurship</h2>
          </div>
        </div>
      </div>

      <div className="third-part">
        <div className="grid2">
          <div className="video"></div>
          <div className="video-text">
            <p>
              The effectiveness of our programs and how they influence learners
              directly mirrors our identity and our consistent capability to
              achieve the goals we establish for our students.
            </p>
            <>
              <div className="values">
                <div className="value1">
                  4000+
                  <p>
                    Enrolled <br /> Students
                  </p>
                </div>
                <div className="value2">
                  4000+
                  <p>Graduates</p>
                </div>
                <div className="value2">
                  4000+
                  <p>
                    Employer <br /> Partners
                  </p>
                </div>
                <div className="value2">
                  4000+
                  <p>
                    Employment <br /> Rate
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="forth-part">
        <div className="slideshow-bg">
          <div className="slideshow-overlay">
            <Slider />
          </div>
        </div>
      </div>
      <div className="fifth-part">
        <p>
          Market-aligned Courses Curated for Your <br />
          Career Success
        </p>
        <div className="slideshow2">
          <Slider />
        </div>
      </div>

      <div className="sixth-part">
        <p>
          Our Career Day events and recruitment <br /> drives have helped over
          85% of our core <br /> graduates find meaningful employment <br />{" "}
          within 6-months post- <br />
          graduation
        </p>
      </div>
      <div className="seventh-part">
        <div className="firsthalf">
          <h2>
            Improving access to quality <br /> education through financial aid
          </h2>

          <p>
            We believe that quality education should be accessible <br /> to all
            who want to learn regardless of their financial <br />
            circumstances. Your Moringa education will now be <br /> made
            affordable and accessible through a number of <br /> Student
            Financing options such as Loans and Partial <br />
            Scholarships.
          </p>
          <button>Learn More</button>
        </div>
        <div className="secondhalf"></div>
      </div>
      <div className="last-part">
        <h2>From the BitLabs world</h2>
        <div className="lastslideshow">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
