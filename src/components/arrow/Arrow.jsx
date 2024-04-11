import React, { useEffect, useState } from 'react';
import "./Arrow.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Arrow() {
    const [isVisible, setIsVisible] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        let lastScrollTop = 0;

        const onScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div onClick={scrollToTop} className={`arrow-container ${isVisible ? '' : 'hidden'}`}>
            <FontAwesomeIcon className="header-icons-desktop" icon={faArrowUp} />
        </div>
    )
}

export default Arrow;