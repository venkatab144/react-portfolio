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
        <div className="page-container">
            <h1 className="base-text section-header-text center-text">Professional Experience</h1>
            <div className="professional-experience-container flex-row base-text">
                <div className="professional-experience-text-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.</p>
                    <br/>
                    <p>Maecenas semper nisi sed lobortis condimentum. Vestibulum imperdiet dui non elementum semper. Nam ornare ac augue sit amet ornare. Donec luctus consectetur consectetur. Vestibulum ante quam, dignissim sed sem sed, eleifend scelerisque erat. Sed et dignissim urna. Donec quis diam tortor. Suspendisse potenti. Ut viverra, diam ac ultricies blandit, ante nunc congue orci, accumsan laoreet felis odio et mi. In hac habitasse platea dictumst. Cras lacinia fringilla viverra. Quisque nulla neque, hendrerit quis ipsum ut, faucibus bibendum odio. Aenean faucibus rhoncus lacus, vitae volutpat tellus vulputate facilisis. Etiam sed risus dui. Nunc tincidunt vulputate efficitur.</p>
                </div>
                <div className="timeline-container">
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>OPP1</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Popup modal trigger={<Paper elevation={3} className="timeline-paper"><p>CON1</p></Paper>} position="right center">
                                    <motion.div initial={{opacity:0, scaleX:0}} animate={{opacity:1, scaleX:1}} exit={{opacity:0, scaleX:0}}>
                                        <Paper elevation={3} className="timeline-paper modal">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem.</p>
                                        </Paper>
                                    </motion.div>
                                </Popup>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>OPP2</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>CON2</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>OPP3</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>CON3</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>OPP4</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>CON4</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <p>OPP5</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className="timeline-paper">
                                    <p>CON5</p>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience
