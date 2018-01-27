import React from 'react';

const resort = (props) => {
    let renderedResort;
        switch(props.res){
            case 'HR':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(6.37 27.55) scale(12.0594)'>HR</text>
                break
            case 'IN':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(6.953 29.898) scale(15.3703)'>IN</text>
                break
            case 'PR':
                renderedResort =  <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(8.486 27.55) scale(12.0594)'>PR</text>
                break
            case 'IT':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(13.257 27.55) scale(12.0594)'>IT</text>
                break
            case 'B':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(15.951 27.55) scale(12.0594)'>B</text>
                break
            case 'QM':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(1.74 27.768) scale(12.0594)'>QM</text>
                break
            case 'RM':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(4.926 27.55) scale(12.0594)'>RM</text>
                break
            case 'V':
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(14.684 27.55) scale(12.0594)'>V</text>
                break
            default:
                renderedResort = <text fontStyle='italic' fontSize='2.003' fill='#fff' transform='translate(13.257 27.55) scale(12.0594)'>--</text>
                break
        }
    return renderedResort
};

export default resort;