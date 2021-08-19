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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.</p>
                        <br/>
                        <p>Maecenas semper nisi sed lobortis condimentum. Vestibulum imperdiet dui non elementum semper. Nam ornare ac augue sit amet ornare. Donec luctus consectetur consectetur. Vestibulum ante quam, dignissim sed sem sed, eleifend scelerisque erat. Sed et dignissim urna. Donec quis diam tortor. Suspendisse potenti. Ut viverra, diam ac ultricies blandit, ante nunc congue orci, accumsan laoreet felis odio et mi. In hac habitasse platea dictumst. Cras lacinia fringilla viverra. Quisque nulla neque, hendrerit quis ipsum ut, faucibus bibendum odio. Aenean faucibus rhoncus lacus, vitae volutpat tellus vulputate facilisis. Etiam sed risus dui. Nunc tincidunt vulputate efficitur.</p>
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
