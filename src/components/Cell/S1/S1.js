import React from 'react';
import cellClass from '../Cells.css';
import classes from './S1.css';
import ProjectExperienceChip from './ProjectExperienceChip'
import {ProgressBar} from 'react-bootstrap'
// import ContactButton from '../../../ContactButton/ContactButton'

const s1 = (props) => {
    return(
        <div className={[cellClass.Cell, classes.S1].join(' ')}>
            <div className={classes.ExperienceElement}>
                <div className={classes.CompartimentLeft}>
                <div className={classes.CompartimentLeftTop}>
                    <div className={classes.CapitalNumber}>5</div>
                    <p style={{display: 'inline', margin: '0'}}> externe Projekte gesamt</p></div>
                    <div className={classes.CompartimentLeftBot}>
                        <p style={{margin: '0', display: 'inline'}}> davon </p>
                        <h3 style={{margin: '0', display: 'inline', marginRight: '5%', marginLeft: '5%', color: 'white'}}>2</h3>
                        <p style={{margin: '0',display: 'inline'}}>IT-Projekte</p></div>

                </div>
                <div className={classes.CompartimentRight}>
                    <div className={classes.CompartimentRightTop}><h3 style={{margin: '0', marginRight: '2%',  color: 'white'}}>4</h3><h5>x PL</h5></div>
                    <div className={classes.CompartimentRightBot}><h3 style={{margin: '0',marginRight: '2%',  color: 'white'}}>1</h3><h5>x PC</h5></div>
                </div>
                    {/*<h2 style={{display: 'inline', marginRight: '2%'}}>5</h2>*/}
                    {/*<p style={{display: 'inline'}}> externe Projekte gesamt</p>*/}
                {/*<div><h2 style={{display: 'inline', marginRight: '2%'}}>2</h2><p style={{display: 'inline'}}> LangnamenProjekttyp</p></div>*/}
                {/*<div><h4 style={{display: 'inline', marginRight: '2%'}}>1x</h4><p style={{display: 'inline'}}> PL</p>*/}
                    {/*<h4 style={{display: 'inline', marginRight: '2%'}}>2x</h4><p style={{display: 'inline'}}> PC</p></div>*/}
            </div>
            <div className={classes.ProgressBarElement}>
                <p><b>6/6</b> Pflichtschulungen abgeschlossen</p>
                <ProgressBar className={classes.ProgressBar}>
                    <ProgressBar className={classes.BarSegment1} now={16.667} key={1} />
                    <ProgressBar className={classes.BarSegment2} now={16.667} key={2} />
                    <ProgressBar className={classes.BarSegment3} now={16.667} key={3} />
                    <ProgressBar className={classes.BarSegment4} now={16.667} key={4} />
                    <ProgressBar className={classes.BarSegment5} now={16.667} key={5} />
                    <ProgressBar className={classes.BarSegment6} now={16.667} key={6} />
                </ProgressBar>
            </div>
        </div>
    )
};

export default s1;