const About = () => {
    return (
      <>
        <div className="afirst-part">
          <img src="/about.jpg" alt="" />
          <div className="overlay"></div>
          <div className="textonimage">
            <h3>OUR VISION</h3>
            <h2>
              Fostering innovation and creativity among the younger generation
              <br /> through STEM.
            </h2>
            <p>
              Our primary objective is to actively involve and inspire the
              younger <br /> generation through the dynamic lens of STEM
              innovation. By emphasizing <br />
              the development of their skill sets within this framework, we seek
              to cultivate <br /> a forward-thinking mindset that encourages
              practical application and hands-on <br /> learning experiences.
              Through this approach, we aim to instill in them a profound <br />{" "}
              appreciation for the real-world implications of their theoretical
              knowledge, <br /> thus empowering them to become the architects of
              tomorrow's technological <br /> advancements and societal <br />
              progress.
            </p>
          </div>
        </div>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,202.7C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="asecondpart">
          <>
            <img src="./aesthetic1.jpg" alt="" />
          </>
          <div className="imagetext">
            <h1>OUR MISSION</h1>
            <h2>
              Our mission is to empower young minds with STEM education,
              fostering innovation and critical thinking in future
              problem-solvers.
            </h2>
            <p>
              Bitlabs is a technology-centric company committed to fostering and
              nurturing young minds through the implementation of cutting-edge
              STEM innovations and educational programs. We are dedicated to
              equipping the next generation with the skills and knowledge
              necessary to thrive in the ever-evolving technological landscape.
            </p>
          </div>
        </div>
        <div className="thirdpart">
          <div className="wave2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#d4d4d4"
                fill-opacity="1"
                d="M0,96L48,117.3C96,139,192,181,288,165.3C384,149,480,75,576,53.3C672,32,768,64,864,112C960,160,1056,224,1152,213.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="text1">
            <h1>OUR VALUES</h1>
            <p>
              These values underpin our operations and serve as guiding
              principles that steer us toward fulfilling our core mandate to our
              stakeholders. They illuminate our approach to achieving our goals.
            </p>
            <div className="container">
              <div className="box">
                <div className="img1"></div>
                <h2>Mentorship</h2>
              </div>
              <div className="box">
                <div className="img2"></div>
                <h2>Perseverance</h2>
              </div>
              <div className="box">
                <div className="img3"></div>
                <h2>Collaboration</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default About;