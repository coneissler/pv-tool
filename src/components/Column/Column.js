import React from 'react';
import {Col} from 'react-bootstrap';

const column = (props) => {
    if(props.size === 0) return null;
    return(
        <Col xs={(props.size)*6}
             sm={(props.size)*6}
             md={(props.size)*3}
             lg={(props.size)*3}
             style={{padding: '0'}}>
            {props.children}
        </Col>
    )
};

export default column;