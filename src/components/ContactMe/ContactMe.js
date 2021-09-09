import './ContactMe.css'
import Paper from '@material-ui/core/Paper';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

        return;
    }

    return (
        <div className="page-container" id="contact-link">
            <h1 className="base-text section-header-text center-text">Contact Me</h1>
            <div className="contact-me-container flex-column base-text">
                <Paper elevation={3} className="contact-paper">
                    <form onSubmit={onSubmit} className="flex-column">
                        <div className="name-email-container flex-row">
                            <input className="text-input base-text" type="text" name="from_name" placeholder="Name"/>
                            <input className="text-input base-text" type="email" name="from_email" placeholder="Email"/>
                        </div>
                        <input className="text-input subject-text base-text" type="text" name="subject" placeholder="Subject"/>
                        <textarea className="text-input subject-text base-text" type="text" name="message" placeholder="Message" style={{resize:'vertical'}}/>
                        <button className="clickable submit-button base-button base-text" type="submit">Send</button>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default ContactMe
