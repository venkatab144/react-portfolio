import './ProfessionalExperience.css'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Popup from 'reactjs-popup';
import { motion } from "framer-motion";

const ProfessionalExperience = () => {
    return (
        <div className="page-container" id="prof-exp-link">
            <h1 className="base-text section-header-text center-text">Professional Experience</h1>
            <div className="professional-experience-container flex-row base-text">
                <div className="professional-experience-text-container">
                    <p>I am currently working at WiseTech Global as a Software Engineer. I joined WiseTech in November 2016 a few weeks after I completed my last HSC exam. I have been working full-time and studying full-time for the past five years. I initially joined WiseTech in 2014 while I was doing a week of mandatory work experience for one of my school subjects, but due to HSC exams I could not work longer. Before I joined WiseTech in 2016, I worked at Dominos at the front desk taking orders from customers. Throughout my ongoing employment at WiseTech I have been a part of four different teams; DPIB (Defensive Programming Induction Bootcamp), CORE Architecture, Customs and CRM (Customer Relationship Management).</p>
                    <br/>
                    <p>While in DPIB, I was working on an internal company website that would be used by developers. The purpose of this website was to display the status and results of DAT (Distributed Auto Tester - an automated system that ran all unit tests on pull requests/TFS shelvesets to identify and functionality breakages) runs. Every time the user submitted a PR or TFS Shelveset the website would display the number of tests run, tests failed, etc... The website was built with a React.js front-end, C# .NET backend and MSSQL for database management.</p>
                    <br/>
                    <p>In CORE, I worked with low-level development of the framework that supports our flaship product "CargoWise One". I worked on various bug fixes and on the development of various new features for the product using primarily C# and SQL.</p>
                    <br/>
                    <p>In Customs, I worked on the software within our product that was responsible for handling all Customs logic and functionality within our product. In this team I developed several new features and implemented bug fixes to improve the product.</p>
                    <br/>
                    <p>My current team is CRM. In CRM I focus on implementing features for our Commission system and Marketing Manager system. I have specifically focused a lot more on the Commission system which is currently under the process of being overhauled. I work directly with our Sales team and our Clients in order to rectify issues and implement features that they request.</p>
                    <br/>
                    <p>During my professional career I have acquired a large amount of knowledge as a full stack developer working on internal websites using React, NodeJS, C# and SQL. I have also gained a lot of experience as a Software Engineer while working on Enterprise Level Applications used globally by hundreds of companies. This has allowed me to develop a deep and extensive knowledge of C# and SQL.</p>
                </div>
                <div className="timeline-container">
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>2014-2014</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper"><p>WiseTech Global (WTG): Work Experience</p></Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Nov 2016 - Nov 2016</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>Dominos: In-Store Staff</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Nov 2016</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>WTG: Software Engineer, Team: DPIB</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Mar 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>Started University - UTS</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Apr 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>WTG - Customs</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Aug 2017</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>WTG - CORE</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Mar 2019</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>WTG - CRM</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>Present</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience
