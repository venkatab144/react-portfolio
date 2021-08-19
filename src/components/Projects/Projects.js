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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet urna quis augue ornare feugiat sit amet sit amet tellus. Fusce eget porttitor diam, a feugiat lectus. Fusce sed nisl tincidunt, hendrerit odio a, venenatis lorem. Sed tincidunt libero ac sapien malesuada tempor. Phasellus libero nibh, convallis vitae pharetra quis, suscipit eu dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac tincidunt velit, nec scelerisque ex.</p>
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
