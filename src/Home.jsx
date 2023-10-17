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
                approach that combines market-aligned courses, a classroom team
                of talented <br /> mentors with the skills and knowledge to
                deliver growth and results for learners, and an environment that{" "}
                <br />
                supports student creativity, job market preparation in a fun,
                open, and transformative learning experience.
              </b>{" "}
              We <br /> celebrate our diversity and value strong, professional
              relationships that help our students build their futures with{" "}
              <br /> greater confidence, capability, and possibility.
            </p>
          </div>
        </>
        <div className="grid">
          <div className="box-1">
            <div className="text"></div>
          </div>
          <div className="box-1">
            <div className="text"></div>
          </div>
          <div className="box-1">
            <div className="text"></div>
          </div>
          <div className="box-1">
            <div className="text"></div>
          </div>
        </div>

        <div className="third-part">
          <div className="grid2">
            <div className="video"></div>
            <div className="video-text">
              <p>
                The quality of our programs and <br /> their impact on learners
                is a direct <br /> reflection of who we are and our <br />{" "}
                ability to consistently meet the <br /> objectives we set for
                our students.
              </p>
              <>
                <div className="values">
                                <div className="value1">4000+
                                <p>Enrolled <br /> Students</p>
                                </div>
                                <div className="value2">4000+
                                <p>Graduates</p>
                                </div>
                                <div className="value2">4000+
                                <p>Employer <br /> Partners</p>
                                </div>
                                <div className="value2">4000+
                                <p>Employment <br /> Rate</p>
                                </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Homepage;
