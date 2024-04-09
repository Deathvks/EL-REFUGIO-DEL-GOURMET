import "./Arrow.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-regular-svg-icons'

function Arrow() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        
    }

    return (
        <div className="arrow-container">
            <FontAwesomeIcon onClick={scrollToTop} className="header-icons-desktop" icon={faArrowUp} />
            {/* <i class="fa-solid fa-arrow-up fa-xs" style="color: #fff2cd;"></i> */}
        </div>
    )
}

export default Arrow;