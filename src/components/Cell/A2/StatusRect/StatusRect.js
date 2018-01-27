import React from 'react';

import Aux from '../../../../hoc/AuxComponent/AuxComponent'

const statusRect = (props) => {
    let rect = <Aux>
        <use xlinkHref='#_Image2' x='57.589' y='3.844' width='41.571' height='39.591'
             transform='scale(.98978)' />
        <path d='M134.411,18.337C134.411,14.222 126.95,10.882 117.76,10.882L84.459,10.882C75.27,10.882 67.809,14.222 67.809,18.337L67.809,33.249C67.809,37.364 75.27,40.704 84.459,40.704L117.76,40.704C126.95,40.704 134.411,37.364 134.411,33.249L134.411,18.337Z'
              fill='#5f0' fillOpacity='.322' transform='matrix(.22522 0 0 .50297 55.014 10.627)'
        />
    </Aux>;
    if(props.status !== 'activ') {
        rect =
            (<Aux>
                <use xlinkHref='#_Image2' x='51.114' width='97.067' height='50.293' transform='scale(.99048 .98613)'
                />
                <path d='M134.411,18.337C134.411,14.222 131.553,10.882 128.034,10.882L74.186,10.882C70.666,10.882 67.809,14.222 67.809,18.337L67.809,33.249C67.809,37.364 70.666,40.704 74.186,40.704L128.034,40.704C131.553,40.704 134.411,37.364 134.411,33.249L134.411,18.337Z'
                      fill='#5f0' fillOpacity='.322' transform='matrix(1.05851 0 0 .90536 -7.865 .148)'
                />
                <text x='70.391' y='24.684'
                      fontSize='12' transform='matrix(.88873 0 0 .88873 6.181 5.317)'>{props.status}</text>
            </Aux>);
    }


    return rect
};

export default statusRect;





