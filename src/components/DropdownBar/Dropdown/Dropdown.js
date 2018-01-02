import React from 'react';

import classes from './Dropdown.css'

const dropdown = (props) => {

    if(props.config.size === 0) return null;
    const styles = {
        'a': classes.a,
        'p': classes.p,
        's': classes.s,
        'd': classes.d,
        0: classes.Size0,
        1: classes.Size1,
        2: classes.Size2
    };
    const selectStyle = [classes.DropDown, styles[props.config.element]].join(' ');
    const divStyle = [styles[props.config.size]];
    return(
        <div className={divStyle}>
            <select value={props.config.element + props.config.size} className={selectStyle} onChange={props.changeHandler}>
                <option value='a2'>A2</option>
                <option value='a1'>A1</option>
                <option value='p2'>P2</option>
                <option value='p1'>P1</option>
                <option value='s2'>S2</option>
                <option value='s1'>S1</option>
                <option hidden value='d1'>D1</option>
            </select>
        </div>
    )
};

export default dropdown;