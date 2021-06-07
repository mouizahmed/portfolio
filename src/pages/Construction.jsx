import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import Tooltip from '@material-ui/core/Tooltip';

import styles from './Construction.module.css';

import logo from '../rounded1.svg';

const Construction = () => {

    

    return (
        <div className={styles.body}>
            <div className={styles.center}>
                <img src={logo} alt="Logo" />
                <h1 className={styles.h1}>Mouiz Ahmed</h1>
                <p className={styles.p}>I'm working on it...</p>

                
            
                <Tooltip title="GitHub">
                <a href="https://www.github.com/mouizahmed/">
                    <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    </Tooltip>
                <Tooltip title="LinkedIn">
                <a href="https://linkedin.com/in/mouizahmed">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    </Tooltip>
                <Tooltip title="Instagram">
                <a href="https://www.instagram.com/_mouiz">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </Tooltip>
                <Tooltip title="Email">    
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mouiza@my.yorku.ca">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    </Tooltip>
                <Tooltip title="Resume">
                <a href="">
                    <FontAwesomeIcon icon={faFile} />
                </a>
                </Tooltip>


                {/* 
                <a href="https://www.github.com/mouizahmed/">
                <FontAwesomeIcon icon={faGithubSquare} className={styles.icons} />
                </a>
        
                <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
                <FontAwesomeIcon icon={faInstagram} className={styles.icons} />
                <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
                <FontAwesomeIcon icon={faFile} className={styles.icons} />
                */}
                
            </div>
        </div>
    );
}

export default Construction;