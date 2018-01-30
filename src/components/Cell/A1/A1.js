import React from 'react';
import cellClass from '../Cells.css';
import classes from './A1.css';

import GeneralTopBar from '../GeneralTopBar'
import placeholder from '../../../assets/PlaceHolderSuit.png'

const a1 = (props) => {

    //check for data
    let name, resort, image

    if(props.data) {
        name = typeof props.data.name === 'string' ? props.data.name : 'Anonymous'
        resort = typeof props.data.name === 'string' ? props.data.name : 'm'
        image = typeof props.data.img !== 'undefined' ? props.data.img : placeholder
    }

    return(
        <div className={[cellClass.Cell, classes.A1].join(' ')}>
            <GeneralTopBar name={name} width='100%' resort={resort}/>
            <div className={classes.MainContent}>
                <div className={classes.ImgContainer}>
                    <img alt={name} className={classes.Img} src={image}/>
                </div>
            </div>

        </div>
    )
};

export default a1;