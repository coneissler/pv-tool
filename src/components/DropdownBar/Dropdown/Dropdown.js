import React from 'react';

import classes from './Dropdown.css'

const dropdown = (props) => {

    const styles = {
        'a': classes.a,
        'p': classes.p,
        's': classes.s,
        'd': classes.d,
         0: classes.Size0,
         1: classes.Size1,
         2: classes.Size2
    };
    const selectStyle = [classes.DropDown, styles[props.config.type]].join(' ');
    const divStyle = styles[props.config.size];
    return(
        <div className={divStyle}>
            <select value={props.config.type+props.config.size} className={selectStyle} onChange={props.changeHandler}>
                <option value={'a2'}>Allgemein (detail)</option>
                <option value={'a1'}>Allgemein </option>
                <option value={'p2'}>Projekte (detail)</option>
                <option value={'p1'}>Projekte</option>
                <option value={'s2'}>Schulungen (detail)</option>
                <option value={'s1'}>Schulungen</option>
                <option hidden value={'d1'}>Default</option>
            </select>
        </div>
    )
};

export default dropdown;