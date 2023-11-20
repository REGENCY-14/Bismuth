import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Foot = () => {
    return (
      <div className="footer">
        <img src="./bitlab-logo.svg" alt="" />
        <div className="icons">
          <FaFacebook className="icon1" />
          <FaInstagram className="icon2" />
          <FaTwitter className="icon3" />
        </div>
        <div className="quicklinks">
          <h4>Quick Links</h4>
        </div>
     
      </div>
    );
}
 
export default Foot;