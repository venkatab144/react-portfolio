import React from 'react'
import './AboutMe.css'
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { SiCsharp, SiPython, SiCplusplus, SiReact, SiJava, SiC } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { useWindowWidth } from '@wojtekmaj/react-hooks';
import { Document, Page } from 'react-pdf';import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AboutMe = () => {
    const [openChild, setOpenChild] = useState(null);
    const [showResume, setShowResume] = useState(false);

    const width = useWindowWidth();

    function onChildOpen(childIdent) {
        if (childIdent === openChild)
        {
            setOpenChild(null);
            return;
        }
        setOpenChild(childIdent);
        console.log("Open child is " + childIdent)
    }

    const items = [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiCsharp className="skill-icon"/>
        },
        {
            id: 1,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <AiFillDatabase className="skill-icon"/>
        },
        {
            id: 2,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiPython className="skill-icon"/>
        },
        {
            id: 3,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <DiJavascript1 className="skill-icon"/>
        },
        {
            id: 4,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiReact className="skill-icon"/>
        },
        {
            id: 5,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiCplusplus className="skill-icon"/>
        },
        {
            id: 6,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiJava className="skill-icon"/>
        },
        {
            id: 7,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiC className="skill-icon"/>
        },
        {
            id: 8,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.",
            icon: <SiCsharp className="skill-icon"/>
        },
    ]

    return (
        <div className="about-me-page-container page-container" id="about-link">
            <h1 className="base-text section-header-text center-text">About Me</h1>
            <div className="flex-column center-div base-text">
                <div className="about-me-container center-div base-text">
                    <div className="about-me-text-container">
                        <p>Hi, my name is Venkata Bommireddipalli and I'm a Software Engineer working at WiseTech Global. I am also a uni student in my 5th and final year enrolled in the Bachelor of Engineering (Hon.), Majoring in Software, with a Diploma in Professional Engineering Practice. In addition, I have completed my submajor in Data Analytics focusing more on the Machine Learning/Artificial Intelligence subjects.</p>
                        <br/>
                        <p>I am a passionate and determined individual that has extensive professional experience developing and maintaining a range of projects such as an internal company website (using a full react, node.js, C# and SQL stack) as well as Enterprise Level Applications used by hundreds of companies.</p>
                        <br/>
                        <p>Throughout my studies at university I have had the opportunity to work on various different projects including; developing Android apps and websites, and creating Neural Networks for Objected Detection and Classification. I am currently doing my Capstone Project: Underwater Coral Detection and Classification Using Deep Learning.</p>
                        <br/>
                        <p>My professional and academic experiences have allowed me to gain a significant amount of experience in a vast variety of technologies, frameworks and languages. My knowledge extends to; web, Enterprise Software, Android and Machine Learning development. </p>
                        <br/>
                        <p>I enjoy working on challenging tasks and don't mind using various different technologies to create a solution. I am open to working with, and learning new frameworks, technologies or languages and am an enthusiastic learner. If you want to work with me, please contact me.</p>
                    </div>
                    <div className="about-me-interactive-container">
                        <p className="info-text">Click icons to expand.</p>
                        <AnimateSharedLayout>
                            <motion.ul layout>
                                {items.map(item => (
                                <Item childIdent={item.id} key={item.id} icon={item.icon} text={item.text} onChildOpen={onChildOpen} openChild={openChild}/>
                                ))}
                            </motion.ul>
                        </AnimateSharedLayout>
                    </div>
                </div>
                <div className="flex-column center-div">
                    <div>
                        <button onClick={() => setShowResume(!showResume)} className="clickable base-button base-text">{showResume ? 'Close' : 'View Resume'}</button>
                        <button className="base-button base-text"><a className="base-text" href='./Resume.pdf' download>Download Resume (Click Text)</a></button>
                    </div>
                    <div>
                        {showResume && <ResumeViewer width={width}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Item({ childIdent, onChildOpen, openChild, icon, text }) {
    return (
      <motion.li className="center-div" layout 
        onClick={() => onChildOpen(childIdent)} 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        style={{backgroundColor: openChild === null && 'transparent', padding: openChild === childIdent && 10}}>
            <div className="center-div" style={{width: openChild != null && 20, height: openChild != null && 20, display: openChild === childIdent && 'none'}}>
                {icon}
            </div>
        <AnimatePresence>{ openChild === childIdent && <Content text={text}/>}</AnimatePresence>
      </motion.li>
    );
  }
  
  function Content({ text }) {
    return (
      <motion.div 
        className="card-text-container"
      >
          <p>{text}</p>
      </motion.div>
    );
  }

  function ResumeViewer({ width }) {
      return (
          <div>
            <Document className="pdf-doc flex-row"
                file="./Resume.pdf">
                <Page width={width > 1300 ? Math.min(width * 0.4, 800) : Math.min(width * 0.7, 800)} className="pdf-page" pageNumber={1} />
                <Page width={width > 1300 ? Math.min(width * 0.4, 800) : Math.min(width * 0.7, 800)} className="pdf-page" pageNumber={2} />
            </Document>
          </div>
      )
  }

export default AboutMe
