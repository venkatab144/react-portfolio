import './ContactMe.css'
import Paper from '@material-ui/core/Paper';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const onSubmit = (e) => {
        e.preventDefault();

        toast.info('Sending Email', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                toast.success('Successfully Sent', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
            }, (error) => {
                toast.error('Error sending email, please instead contact me at venkatab144@gmail.com', {
                    position: "bottom-right",
                    autoClose: 9000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                    });
                console.log("TEST")
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
                            <input className="text-input base-text" type="text" name="from_name" placeholder="Name" required/>
                            <input className="text-input base-text" type="email" name="from_email" placeholder="Email"/>
                        </div>
                        <input className="text-input subject-text base-text" type="text" name="subject" placeholder="Subject"/>
                        <textarea className="text-input subject-text base-text" type="text" name="message" placeholder="Message" style={{resize:'vertical'}} required/>
                        <button className="clickable submit-button base-button base-text" type="submit">Send</button>
                    </form>
                </Paper>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ContactMe
