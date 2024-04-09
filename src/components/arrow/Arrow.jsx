import React, { useEffect, useState } from 'react'; // Importa useEffect y useState
import "./Arrow.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Arrow() {
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        let lastScrollTop = 0; // Variable para almacenar la última posición de desplazamiento

        const onScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Desplazamiento hacia abajo
                setIsVisible(false);
            } else {
                // Desplazamiento hacia arriba
                setIsVisible(true);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Actualiza la última posición de desplazamiento
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll); // Limpieza al desmontar
    }, []);

    return (
        <div onClick={scrollToTop} className={`arrow-container ${isVisible ? '' : 'hidden'}`}>
            <FontAwesomeIcon className="header-icons-desktop" icon={faArrowUp} />
        </div>
    )
}

export default Arrow;