import './Header.css'
import { motion } from "framer-motion";
import Typical from 'react-typical'
import TextTransition, { presets } from "react-text-transition";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll'

const Header = () => {
    
  const [index, setIndex] = React.useState(0);

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
    </Link>]

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };

  const TEXTS = [
    " machine learning ",
    " front-end ",
    " back-end ",
    " web ",
    " full-stack ",
  ];

    return (
      <div className="page-container page-header" id="header-link">
      <div>
          <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 20"
              className="item"
            >
              <linearGradient id="red-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#0000ff" offset="0%" />
                    <stop stopColor="#ff0000" offset="100%" />
              </linearGradient>

              <motion.path
                d="M 30.861 17.874 L 27.567 17.874 L 20.925 0.486 L 23.976 0.486 L 29.187 14.715 L 34.398 0.486 L 37.449 0.486 L 30.861 17.874 Z M 55.35 17.874 L 46.548 17.874 L 46.548 0.486 L 54.972 0.486 A 8.77 8.77 0 0 1 56.388 0.592 Q 57.123 0.713 57.707 0.97 A 3.671 3.671 0 0 1 58.806 1.701 A 3.962 3.962 0 0 1 59.866 3.581 Q 60.025 4.195 60.045 4.92 A 7.642 7.642 0 0 1 60.048 5.13 A 5.766 5.766 0 0 1 59.954 6.197 Q 59.818 6.923 59.481 7.493 Q 58.914 8.451 57.969 8.937 A 4.319 4.319 0 0 1 59.075 9.407 A 3.568 3.568 0 0 1 59.981 10.192 A 2.466 2.466 0 0 1 59.998 10.214 Q 60.723 11.118 60.723 12.852 Q 60.723 15.39 59.36 16.632 Q 57.996 17.874 55.35 17.874 Z M 99.468 10.989 L 87.102 16.632 L 87.102 13.878 L 96.39 9.774 L 87.102 5.697 L 87.102 2.97 L 99.468 8.586 L 99.468 10.989 Z M 12.366 13.878 L 12.366 16.632 L 0 10.989 L 0 8.586 L 12.366 2.97 L 12.366 5.697 L 3.105 9.774 L 12.366 13.878 Z M 72.252 17.874 L 69.255 17.874 L 75.573 0 L 78.57 0 L 72.252 17.874 Z M 49.491 10.071 L 49.491 15.714 L 54.729 15.714 A 5.9 5.9 0 0 0 55.544 15.662 Q 55.962 15.603 56.298 15.479 A 2.2 2.2 0 0 0 57.024 15.053 A 1.886 1.886 0 0 0 57.493 14.361 Q 57.736 13.768 57.752 12.868 A 7.192 7.192 0 0 0 57.753 12.744 A 4.046 4.046 0 0 0 57.687 11.985 Q 57.605 11.558 57.423 11.227 A 1.95 1.95 0 0 0 57.038 10.732 A 1.934 1.934 0 0 0 56.441 10.37 Q 55.867 10.137 54.971 10.086 A 9.37 9.37 0 0 0 54.432 10.071 L 49.491 10.071 Z M 49.491 2.7 L 49.491 7.911 L 54.567 7.911 A 5.05 5.05 0 0 0 55.316 7.86 Q 55.699 7.802 56.003 7.679 A 1.852 1.852 0 0 0 56.687 7.223 A 2.323 2.323 0 0 0 57.239 6.147 A 3.447 3.447 0 0 0 57.321 5.373 A 4.483 4.483 0 0 0 57.264 4.632 Q 57.129 3.827 56.673 3.361 A 1.731 1.731 0 0 0 56.102 2.988 Q 55.419 2.7 54.243 2.7 L 49.491 2.7 Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { delay: 0.5, duration: 3, ease: "easeIn" },
                  fill: { delay: 0.5, duration: 2, ease: [1, 0, 0.8, 1] }
                }}
              />
        </motion.svg>
      </div>
      <div className="center-div flex-div flex-column-div">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}} >
          <Typical className="base-text center-text header-sub-text-larger"
            steps={[2500, 'VENKATA BOMMIREDDIPALLI']}
            loop={1}
            wrapper="h1"
          />
        </motion.div>
        <motion.div className="center-div flex-div flex-row-div" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.5}} >
            <p className="base-text center-text header-sub-text">I am a </p>
            <TextTransition className="flip base-text header-sub-text"
            text={ TEXTS[index % TEXTS.length] }
            springConfig={presets.gentle}
              inline
              overflow
            />
          <p className="base-text center-text header-sub-text">developer.</p>
        </motion.div>
      </div>

              
      <div className="social-link-container">
          <motion.ul
              className="social-link-ul"
              variants={container}
              initial="hidden"
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
    </div>
    )
}

export default Header
