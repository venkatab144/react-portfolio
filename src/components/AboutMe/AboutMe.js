import React from 'react'
import './AboutMe.css'
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { SiCsharp, SiPython, SiCplusplus, SiReact, SiJava } from "react-icons/si";
import { AiFillDatabase, AiFillGithub } from "react-icons/ai";
import { DiJavascript1, DiAndroid } from "react-icons/di";
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
            text: "I have used C# extensively in my professional career as a Software Engineer. Currently, at WiseTech Global, around 90% of the code I write is in C#. I have worked with C# for over 5 years developing a deep understanding and gaining significant knowledge in the language. ",
            icon: <SiCsharp className="skill-icon"/>
        },
        {
            id: 1,
            text: "I have used SQL for professional, academic and personal use. Professionally, I have written large and complex SQL queries to gather and organise data to insert into reports. I have also worked on SQL query optimisation to improve the performance of several queries and improve our product. Academically, I have used SQL as the database for websites and apps that I have developed for my university subjects.",
            icon: <AiFillDatabase className="skill-icon"/>
        },
        {
            id: 2,
            text: "I have used Python extensively for personal and academic use. My Data Analytics submajor exposed me heavily to Python and I used it to create Convolutional Neural Networks and Image Classification Algorithms. I have also used it to develop personal tools that I use frequently to help with tasks.",
            icon: <SiPython className="skill-icon"/>
        },
        {
            id: 3,
            text: "I used JavaScript at WiseTech Global to create the front-end of an internal company website. This website also was also made using significantly JavaScript. ",
            icon: <DiJavascript1 className="skill-icon"/>
        },
        {
            id: 4,
            text: "I used React to develop the front-end of an internal company website that is used by hundreds of developers daily at WiseTech Global, this involved using a full React, node.js, C# and SQL stack. I have also used React extensively in university Software Studio subjects to create different websites. In addition, this website was built using React.",
            icon: <SiReact className="skill-icon"/>
        },
        {
            id: 5,
            text: "I have used C and C++ to develop and create embedded systems used for Robotics and Sensing, Actuation and Control. I have experience with graphics libraries in C++ such as SFML as well. C++ was the first language I learned.",
            icon: <SiCplusplus className="skill-icon"/>
        },
        {
            id: 6,
            text: "I have used Java significantly to develop Android applications. I have used it for some personal projects and also university projects. I have significant experience with Java.",
            icon: <SiJava className="skill-icon"/>
        },
        {
            id: 7,
            text: "I have created many Android applications both for university and for personal use. I started learning android development more than five years ago. Since then I have developed an extensive knowledge regarding Android development.",
            icon: <DiAndroid className="skill-icon"/>
        },
        {
            id: 8,
            text: "I have extensive knowledge with version control systems such as Git, Team Foundation Server (TFS) and Azure. I use Git and Azure almost daily professionally and before that I used TFS.",
            icon: <AiFillGithub className="skill-icon"/>
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
                    <div className="center-div">
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
                <Page width={width > 1300 ? Math.min(width * 0.6, 800) : Math.min(width * 0.9, 800)} className="pdf-page" pageNumber={1} />
            </Document>
          </div>
      )
  }

export default AboutMe
