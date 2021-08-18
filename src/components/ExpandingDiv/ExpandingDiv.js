import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './ExpandingDiv.css'
import Paper from '@material-ui/core/Paper';

const ExpandingDiv = ({ info }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen()
    {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div layout onClick={toggleOpen} className="expanding-div-container">
            <motion.div layout><h1 layout style={{borderStyle: !isOpen && 'none'}} className="base-text center-text expanding-div-header clickable">{info.header}</h1></motion.div>
            <AnimatePresence>
                {isOpen && <Content info={info} />}
            </AnimatePresence>
        </motion.div>
    )
}

function Content({ info }) {
    return (
        <motion.div 
            layout
            className="expanding-div-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                {info.content.map((el, index) => (
                    <div>
                        <Paper elevation={3} className="project-paper">
                            <h1 className="expanding-div-content-heading">{el.title}</h1>
                            <p className="expanding-div-content-paragraph">{el.body}</p> 
                        </Paper>
                    </div>
                ))}
        </motion.div>
    );
  }

export default ExpandingDiv
