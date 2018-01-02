import React from 'react';

import classes from './FilterIcon.css'

const filterIcon = (props) => {
    return(
        <svg xmlns='http://www.w3.org/2000/svg' className={classes.FilterIcon}
             viewBox='0 0 459 459'>
            <path className={classes.Path} d='M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z'
                  fill="white" id='filter' />
        </svg>
    )
};

export default filterIcon;