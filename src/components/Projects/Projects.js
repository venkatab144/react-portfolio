import ExpandingDiv from '../ExpandingDiv/ExpandingDiv'
import { motion, AnimateSharedLayout } from "framer-motion";
import { AcademicProjects, ProfessionalProjects } from '../ProjectInfo';
import './Projects.css'

const Projects = () => {
    return (
        <div className="page-container" id="projects-link">
            <h1 className="base-text section-header-text center-text">Projects</h1>
            <div className="projects-container flex-column base-text">
                <div className="projects-text-container">
                    <p>Throughout my professional career and academic studies I have worked on various different projects using a wide variety of frameworks, technologies and languages. Below are some of projects that I have worked on over the years.</p>
                </div>
                <AnimateSharedLayout>
                    <motion.div className="projects-expanding-div-container" layout><ExpandingDiv info={AcademicProjects}/></motion.div>
                    <motion.div className="projects-expanding-div-container" layout><ExpandingDiv info={ProfessionalProjects}/></motion.div>
                </AnimateSharedLayout>
            </div>
        </div>
    )
}

export default Projects
