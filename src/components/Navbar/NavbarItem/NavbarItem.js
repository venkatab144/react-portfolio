import './NavbarItem.css'
import { Link } from 'react-scroll'

const NavbarItem = ({ text, linkId, smallMenu }) => {
    return (
        <Link className={ smallMenu ? "navbar-item-container-burger flex-column center-div clickable" : "navbar-item-container flex-column center-div clickable"} activeClass="navbar-item-active" to={linkId} spy={true} smooth={true} offset={-40} duration={1000}>
            <h1 className="navbar-text base-text">{text}</h1>
        </Link>
    )
}

export default NavbarItem
