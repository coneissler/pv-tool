import React from 'react';

const resort = (props) => {
    let renderedResort;
        switch(props.res){
            case 'HR':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(4.143 21.962) scale(10.1577)'>HR</text>
                break
            case 'IN':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(7.183 21.962) scale(10.1577)'>IN</text>
                break
            case 'PR':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(5.456 21.962) scale(10.1577)'>PR</text>
                break
            case 'IT':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(9.475 21.962) scale(10.1577)'>IT</text>
                break
            case 'B':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(10.587 21.962) scale(10.1577)'>B</text>
                break
            case 'QM':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(.012 22.146) scale(10.1577)'>QM</text>
                break
            case 'RM':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(2.044 21.962) scale(10.1577)'>RM</text>
                break
            case 'V':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(10.52 21.962) scale(10.1577)'>V</text>
                break
            default:
                renderedResort = null
                break
        }
    return (
        <svg height='100%' viewBox='0 0 39.5 29.5' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
             clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
            <path d='M579.091,172.797L465.491,172.797L477.987,16.612L579.091,16.612L579.091,172.797Z'
                  fill={props.active ? '#1e467d' : 'rgba(171,45,25,0.7)'} transform='matrix(-.34771 0 0 -.189 201.356 32.66)'>
              <title>coany</title>
            </path>
            {renderedResort}
        </svg>)
};
//Passiv Rot: #ab2d19
//Passiv Gelb: #EEBD15
export default resort;