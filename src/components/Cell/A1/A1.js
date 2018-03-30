import React from 'react';
import cellClass from '../Cells.css';
import classes from './A1.css';

import GeneralTopBar from '../GeneralTopBar'

const a1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.A1].join(' ')}>
            <GeneralTopBar name={props.data.name} width='100%' resort={props.data.resort}/>
            <div className={classes.MainContent}>
                <div className={classes.ImgContainer}>
                    <img alt={props.data.name} className={classes.Img} src={props.data.img}/>
                </div>
            </div>

        </div>
    )
};

export default a1;