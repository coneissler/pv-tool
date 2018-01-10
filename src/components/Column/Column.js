import React from 'react';

import {Col} from 'react-bootstrap';
import Cell from '../Cell/Cell';

const column = (props) => {
    if(props.size === 0) return null;
    return(
        <Col xs={(props.size)*6}
             sm={(props.size)*6}
             md={(props.size)*3}
             lg={(props.size)*3}
             style={{padding: '2px'}}>
                <Cell type={props.type} size={props.size} social={props.social} data={props.data}/>
        </Col>
    )
};

export default column;