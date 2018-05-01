import React from 'react';
import cellClass from '../Cells.css';
import classes from './S1.css';
import {ProgressBar} from 'react-bootstrap'
// import ContactButton from '../../../ContactButton/ContactButton'

const s1 = (props) => {
  const data = props.data
  let progressBar = [];
  for(let i = 0; i < data.completedSeminars; i++) {
    progressBar.push(<ProgressBar className={classDict[i]} now={16.667} key={i} />)
  }
    return(
        <div className={[cellClass.Cell, classes.S1].join(' ')}>
            <div className={classes.ExperienceElement}>
                <div className={classes.CompartimentLeft}>
                <div className={classes.CompartimentLeftTop}>
                    <div className={classes.CapitalNumber}>{data.projectsTotal}</div>
                    <p style={{display: 'inline', margin: '0'}}> externe Projekte gesamt</p></div>
                  {data.bestTypeAmount === 0 ? <div className={classes.CompartimentLeftBot}/>:
                      <div className={classes.CompartimentLeftBot}>
                        <p style={{margin: '0 0 0 5%', display: 'inline'}}> davon </p>
                          <div style={{fontSize: '200%', margin: '0', display: 'inline', marginRight: '5%', marginLeft: '5%', color: 'white'}}>
                            {data.bestTypeAmount}
                          </div>
                        <p style={{margin: '0',display: 'inline', fontSize: data.bestType.length > 13 ? '79%' : '100%'}}>{data.bestType}</p></div>}
                </div>
                <div className={classes.CompartimentRight}>
                    <div className={classes.CompartimentRightTop}>
                      <div className={classes.BoxNumber}>{data.timesPl}</div>
                      <div className={classes.BoxDescription}>PL</div>
                    </div>
                    <div className={classes.CompartimentRightBot}>
                      <div className={classes.BoxNumber}>{data.timesPc}</div>
                      <div className={classes.BoxDescription}>PC</div>
                    </div>
                </div>
            </div>
            <div className={classes.ProgressBarElement}>
                <p style={{marginBottom: '2%'}}><b>{data.completedSeminars}/6</b> Pflichtschulungen abgeschlossen</p>
                <ProgressBar className={classes.ProgressBar}>
                  {progressBar}
                </ProgressBar>
            </div>
        </div>
    )
};

export default s1;

const classDict = {
  0: classes.BarSegment1,
  1: classes.BarSegment2,
  2: classes.BarSegment3,
  3: classes.BarSegment4,
  4: classes.BarSegment5,
  5: classes.BarSegment6,
}