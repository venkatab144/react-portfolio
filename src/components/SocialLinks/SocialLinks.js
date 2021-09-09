import './SocialLinks.css'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll'
import { motion } from "framer-motion";

const SocialLinks = ({ absolute, animate }) => {
  const icons = [
      <AiFillGithub 
        onClick={(e) => {
          e.preventDefault(); 
          window.location.href='https://github.com/venkatab144'; 
        }} 
        className="clickable social-link-icon"/>, 
      <FaLinkedin  
        onClick={(e) => {
          e.preventDefault(); 
          window.location.href='https://www.linkedin.com/in/venkata-bommireddipalli-9a31a9aa/'; 
        }} 
        className="clickable social-link-icon"/>,
      <Link className="social-link-link center-div clickable" to="contact-link" spy={true} smooth={true} offset={-40} duration={1000}>
        <MdEmail className="clickable social-link-icon"/>
      </Link>
    ]

    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };
    
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay:2,
        delayChildren: 4,
        staggerChildren: 0.7
      }
    }
  };

    return (
        <div className={"social-link-container" + (absolute && " pos-absolute") }>
          <motion.ul
              className="social-link-ul"
              variants={container}
              initial={animate ? "hidden" : "visible"}
              animate="visible"
            >
              {[0, 1, 2].map((index) => (
                <motion.li 
                  key={index} 
                  className="social-link-item" 
                  variants={item} 
                  whileHover={{scale:1.3}}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}>{icons[index]}</motion.li>
              ))}
            </motion.ul>
        </div>
    )
}

export default SocialLinks
