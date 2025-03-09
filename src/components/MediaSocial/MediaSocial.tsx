import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";


export default function MediaSocial() {

    return (
        <>
            <a href="">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-gray-600 p-2 rounded-lg transition-all duration-300 ease-out hover:bg-blue-500 hover:text-white active:scale-75"/>
            </a>
            <a href="https://github.com/MrIrawan" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-600 p-2 rounded-lg transition-all duration-300 ease-out hover:bg-blue-500 hover:text-white active:scale-75"/>
            </a>
            <a href="https://www.linkedin.com/in/farrel-irawan-0ba79134a" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-600 p-2 rounded-lg transition-all duration-300 ease-out hover:bg-blue-500 hover:text-white active:scale-75"/>
            </a>
            <a href="https://www.instagram.com/canttguardrell" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-600 p-2 rounded-lg transition-all duration-300 ease-out hover:bg-blue-500 hover:text-white active:scale-75"/>
            </a>
        </>
    );
}