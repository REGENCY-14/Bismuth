import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons';

const Foot = () => {
    return (
      <div className="footer">
        <img src="./bitlab-logo.svg" alt="" />
        <FaFacebook className="icon1"/>
        <FaInstagram className="icon2"/>
        <FaTwitter className="icon3"/>
      

       
      </div>
    );
}
 
export default Foot;