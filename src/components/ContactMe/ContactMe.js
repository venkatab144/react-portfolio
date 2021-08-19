import './ContactMe.css'
import Paper from '@material-ui/core/Paper';

const ContactMe = () => {
    const onSubmit = (e) => {
        e.preventDefault();

        return;
    }

    return (
        <div className="page-container" id="contact-link">
            <h1 className="base-text section-header-text center-text">Contact Me</h1>
            <div className="contact-me-container flex-column base-text">
                <Paper elevation={3} className="contact-paper">
                    <form onSubmit={onSubmit} className="flex-column">
                        <div className="name-email-container flex-row">
                            <input className="text-input base-text" type="text" placeholder="Name"/>
                            <input className="text-input base-text" type="email" placeholder="Email"/>
                        </div>
                        <input className="text-input subject-text base-text" type="text" placeholder="Subject"/>
                        <textarea className="text-input subject-text base-text" type="text" placeholder="Message" style={{resize:'vertical'}}/>
                        <button className="clickable submit-button base-button base-text" type="submit">Send</button>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default ContactMe
