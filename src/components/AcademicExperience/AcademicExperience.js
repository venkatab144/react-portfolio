import Paper from '@material-ui/core/Paper';
import './AcademicExperience.css'
import Popup from 'reactjs-popup';
import { motion } from "framer-motion";

const AcademicExperience = () => {
    const completedSubjects = [
        "Engineering Communication", 
        "Applications Programming", 
        "Mathematical Modelling 1", 
        "Business Requirements Modelling",
        "Sensing, Actuation and Control",
        "Mathematical Modelling 2",
        "Systems Testing and Quality Management",
        "Software Engineering Studio 1A",
        "Engineering Practice Preparation 1",
        "Data Structures and Algorithms",
        "Software Engineering Studio 1B",
        "Work Integrated Learning 1",
        "Engineering Professional Experience 1",
        "Engineering Economics and Finance",
        "Software Engineering Studio 2A",
        "Engineering Practice Reflection 1",
        "Information System Development Methodologies",
        "Introduction to Data Analytics",
        "Software Architecture",
        "Software Engineering Studio 2B",
        "Database Fundamentals",
        "Advanced Data Analytics",
        "Engineering Practice Preparation 2",
        "Physical Modelling",
        "Design and Innovation Fundamentals",
        "Deep Learning and Convolutional Neural Networks",
        "Software Engineering Studio 3A",
        "Engineering Project Management",
        "Software Engineering Studio 3B",
        "Image Processing and Pattern Recognition",
        "Work Integrated Learning 2",
        "Engineering Professional Experience 2",
        "Fundamentals of C Programming",
        "Entrepreneurship and Commercialisation",
        "Programming Fundamentals",
        "Engineering Research Preparation",
    ]

    const currentSubjects = ["Engineering Capstone", "Engineering Practice Reflection 2", "Network Fundamentals"]

    return (
        <div className="page-container" id="academic-exp-link">
            <h1 className="base-text section-header-text center-text">Academic Experience</h1>
            <div className="academic-experience-container flex-row base-text">
                <div className="academic-experience-paper-container">
                    <Paper elevation={3} className="academic-info-paper">
                        <div className="academic-info-grid-bg">
                            <div className="academic-info-grid">
                                <h1 className="grid-item">University</h1>
                                <p className="grid-item">University of Technology Sydney</p>
                                <h1 className="grid-item">Course</h1>
                                <p className="grid-item">Bachelor of Engineering (Hon.) Diploma in Professional Engineering Practice</p>
                                <h1 className="grid-item">Year</h1>
                                <p className="grid-item">Final Year (5th)</p>
                                <h1 className="grid-item">WAM</h1>
                                <p className="grid-item">75.37 - Distinction Average</p>
                                <h1 className="grid-item">Subjects</h1>
                                <Popup modal lockScroll={true} trigger={<p className="grid-item clickable">Click to View Subjects</p>} position="right center">
                                    <motion.div initial={{opacity:0, scaleX:0}} animate={{opacity:1, scaleX:1}} exit={{opacity:0, scaleX:0}}>
                                        <Paper elevation={3} className="subjects-paper">
                                            <h1 className="subject-header">Completed Subjects:</h1>
                                            <div className="completed-subjects-grid">
                                                {completedSubjects.map((el, index) => (
                                                    <p className="subject-name" key={index}>{el}</p>
                                                ))}
                                            </div>
                                            <br/>
                                            <h1 className="subject-header">Current Subjects:</h1>
                                            {currentSubjects.map((el, index) => (
                                                <p className="subject-name" key={index + completedSubjects.length}>{el}</p>
                                            ))}
                                        </Paper>
                                    </motion.div>
                                </Popup>
                                
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className="academic-experience-text-container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.</p>
                </div>
            </div>
        </div>
    )
}

export default AcademicExperience
