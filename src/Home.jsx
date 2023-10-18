import Slider from "./slideshow";

const Homepage = () => {
  return (
    <div className="Home">
      <div className="first-part">
        <img src="images\intro.jpg" alt="" />
        <div className="textonimage">
          <h2>
            Nurturing Africa's Tech<br></br> Talent
          </h2>
          <p>
            Through market-aligned skills training, we help learners build{" "}
            <br></br>new career possibilities with greater confidence and
            capability.
          </p>
          <button className="availableCourses">SEE AVAILABLE COURSES</button>
          {/* <div className="innersection">
                  
              </div> */}
        </div>
      </div>
      <>
        <div className="second-part">
          <h2>Discover. Grow .Transform</h2>
          <br />
          <br />
          <p>
            In Moringa we are transforming the way tech education is done in
            African Markets.{" "}
            <b>
              All our programs are delivered <br /> through a blended learning
              approach that combines market-aligned courses, a classroom team of
              talented <br /> mentors with the skills and knowledge to deliver
              growth and results for learners, and an environment that <br />
              supports student creativity, job market preparation in a fun,
              open, and transformative learning experience.
            </b>{" "}
            We <br /> celebrate our diversity and value strong, professional
            relationships that help our students build their futures with <br />{" "}
            greater confidence, capability, and possibility.
          </p>
        </div>
      </>
      <div className="grid">
        <div className="box-1">
          <div className="text">
            <h2>Ayanokoji</h2>
          </div>
        </div>
        <div className="box-1">
          <div className="text">
            <h2>Ayanokoji</h2>
          </div>
        </div>
        <div className="box-1">
          <div className="text">
            <h2>Ayanokoji</h2>
          </div>
        </div>
        <div className="box-1">
          <div className="text">
            <h2>Ayanokoji</h2>
          </div>
        </div>
      </div>

      <div className="third-part">
        <div className="grid2">
          <div className="video"></div>
          <div className="video-text">
            <p>
              The quality of our programs and <br /> their impact on learners is
              a direct <br /> reflection of who we are and our <br /> ability to
              consistently meet the <br /> objectives we set for our students.
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
                      <Slider/>
          </div>
        </div>
      </div>
      <div className="fifth-part">
        <p>
          Market-aligned Courses Curated for Your <br />
          Career Success
        </p>
              <div className="slideshow2">
                  <Slider/>
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
        <h2>From the Moringa World</h2>
              <div className="lastslideshow">
                  <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
