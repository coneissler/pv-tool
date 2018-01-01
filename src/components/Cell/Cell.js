import React from 'react';
import Aux from '../../hoc/AuxComponent/Aux'
import A2 from '../CellTypes/A2/A2'
import A1 from '../CellTypes/A1/A1'
import P2 from '../CellTypes/P2/P2'
import P1 from '../CellTypes/P1/P1'
import S2 from '../CellTypes/S2/S2'
import S1 from '../CellTypes/S1/S1'
import D1 from '../CellTypes/D1/D1'


const cell = (props) => {
    let renderedCell = null;
    switch(props.type) {

        case "d":
            renderedCell = <D1 data={props.data}/>;
            break;

        case "a":
            if(props.size === 1){
                renderedCell = <A1 data={props.data}/>;
                break;
            }else{
                renderedCell = <A2 data={props.data}/>;
                break;
            }
        case "p":
            if(props.size === 1){
                renderedCell = <P1 data={props.data}/>;
                break;
            }else{
                renderedCell = <P2 data={props.data}/>;
                break;
            }
        case "s":
            if(props.size === 1){
                renderedCell = <S1 data={props.data}/>;
                break;
            }else{
                renderedCell = <S2 data={props.data}/>;
                break;
            }
        default:
            break;
    }
    return(
        <Aux>
            {renderedCell}
        </Aux>
    )
};

export default cell;