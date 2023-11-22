import Slider from "./slideshow";
import './index.css'

const Homepage = () => {
  return (
    <div className="Home">
      <div className="first-part">
        <img src="/intro1.jpg" alt="" />
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
          <h1>Virtual or Inperson training</h1>

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
            critical thinking but <br /> also aim to cultivate a strong <br />
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
                  <img src="./Good Shepherd RC logo.png" alt="" />
                </div>
                <div className="value2">
                  <img src="./hilltop.png" alt="" />
                </div>
                <div className="value2">
                  <img src="./Mount Olivet School Logo.png" alt="" />
                </div>
                <div className="value2">
                  <img src="./nagies school.png" alt="" />
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
      {/* <div className="fifth-part">
        <p>
          Market-aligned Courses Curated for Your <br />
          Career Success
        </p>
        <div className="slideshow2">
          <Slider />
        </div>
      </div> */}

      <div className="sixth-part">
        <p>
          BitLabs, with its highly qualified and experienced trainers, is <br />
          dedicated to guiding individuals to become exceptional programmers in{" "}
          <br />
          their chosen courses. The institution emphasizes a dynamic and <br />
          supportive learning environment, offering personalized instruction to{" "}
          <br />
          cater to varying skill levels. BitLabs is committed to empowering{" "}
          <br />
          learners, ensuring their success through comprehensive training and{" "}
          <br />
          individualized attention. Join BitLabs to embark on a transformative{" "}
          <br />
          journey toward excellence in programming.
        </p>
      </div>
      <div className="seventh-part">
        <div className="firsthalf">
          <h2>
            BitLabs is a leading educational institution promoting inclusivity
            for aspiring programmers. With a focus on encouraging women in
            programming, we offer a supportive space. Committed to breaking
            barriers, we empower individuals, regardless of gender, in coding
            and software development. Join BitLabs for a diverse, welcoming, and
            empowering experience. Thrive in the dynamic field of programming
            excellence with us.
          </h2>
        </div>
        <div className="secondhalf"></div>
      </div>
      
    </div>
  );
};

export default Homepage;
