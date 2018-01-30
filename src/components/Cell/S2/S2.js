import React from 'react';
import cellClass from '../Cells.css';
import classes from './S2.css';
import SeminarChip from './SeminarChip'

const s2 = (props) => {
    let seminars = [], counter = 0, nextElement, expieriencedIn, pastProjects, skill1, skill2
    const strings = ['Angebot', 'Recht', 'Internes, QM und BDSU', 'Präsentationstechniken', 'Projektmanagement', 'Corporate Design']
    if(props.data){
    for (let i = 0; i < 6; i++){
        try {
            nextElement = props.data.seminars[i].completed
            if(props.data.seminars[i].completed) counter++
        }catch(error) {
            nextElement = false
        }finally {
            seminars.push(<SeminarChip completed={nextElement}
                                       name={strings[i]}
                                       key={i}/>)
        }
    }
        expieriencedIn = typeof props.data.expieriencedIn === 'string' ? props.data.expieriencedIn : ''
        pastProjects = typeof props.data.pastProjects === 'string' ? props.data.pastProjects : ''
        skill1 = typeof props.data.skill1 === 'string' ? props.data.skill1 : ''
        skill2 = typeof props.data.skill2 === 'string' ? props.data.skill2 : ''
    }else for (let i = 0; i < 6; i++){
        seminars.push(<SeminarChip completed={false}
                                   name={strings[i]}
                                   key={i}/>)

    }
    return (
        <div className={[cellClass.Cell, classes.S2].join(' ')}>
            <div className={classes.TopBar}><p className={classes.Header}>{counter}/6 Pflichtschulungen abgeschlossen</p></div>
            <div className={classes.MainContent}>
                <div className={classes.StaticStats}>
                    <div className={classes.Experience}>
                        <div className={classes.BoxDescription}>Experience In</div>
                        {expieriencedIn}
                    </div>
                    <div className={classes.PastProjects}>
                        <div className={classes.BoxDescription}>Past Projects</div>
                        {pastProjects}
                    </div>
                    <div className={classes.Skills}>
                        <div className={classes.Skill1}>
                            <div style={{color: "black"}} className={classes.BoxDescription}>Skill1</div>{skill1}</div>
                        <div className={classes.Skill2}>
                            <div style={{color: "black"}} className={classes.BoxDescription}>Skill2</div>{skill2}</div>
                    </div>
                </div>
                <div className={classes.SeminarView}>
                    {seminars}
                </div>
            </div>
        </div>
    )
};

export default s2;