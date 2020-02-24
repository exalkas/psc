//Handle note found pages
import React from 'react';

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FaExclamationCircle } from 'react-icons/fa';
// import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="not_found_container">
                <FaExclamationCircle/>
                {/* <FontAwesomeIcon icon={faExclamationCircle}/> */}
                <div>
                    Oops !! page not found
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;