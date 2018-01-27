import React, {Component} from 'react';
import cellClass from '../Cells.css';
import classes from './P2.css';

import ProjectChip from './ProjectChip'
import ProjectDisplay from './ProjectDisplay'
import PerformanceIndicator from './PerformanceIndicator'

class P2 extends Component {
    state = {
        displayProject: -1
    }

    hoverProjectHandle = (project) => {
        this.setState({
            displayProject: project
        })
}

    render(){
    const projects = this.props.data.projects.map((project, key) => (<ProjectChip  onHover={this.hoverProjectHandle} key={key} id={key} project={project}/>))
        const display = this.state.displayProject !== -1 && this.props.closeProjects ?
            <ProjectDisplay display={this.props.data.projects[this.state.displayProject]}/> : <div className={classes.Placeholder}><p>Projects</p></div>

    return(
        <div className={[cellClass.Cell, classes.P2].join(' ')}>
            <div className={classes.TopBar}><p className={classes.Header}>6 externe Projekte abgeschlossen</p></div>
            <div className={classes.MainContent}>
                <div className={classes.StaticNumbers}>
                    <div className={classes.ChipA}>
                        128 BT
                        <div className={classes.IndicatorBox}>
                            <PerformanceIndicator performance={0}/>
                        </div>
                    </div>
                    <div className={classes.ChipB}>
                        128 BT
                        <div className={classes.IndicatorBox}>
                            <PerformanceIndicator performance={2}/>
                        </div>
                    </div>
                    <div className={classes.ChipA}>
                        1:1.5
                        <div className={classes.IndicatorBox}>
                            <PerformanceIndicator performance={1}/>
                        </div>
                    </div>
                </div>
                <div className={classes.ProjectView}>
                    {projects}
                </div>
                <div className={classes.HoverNumbers}>
                    {display}
            </div>
        </div>
        </div>
    )}
};

 export default P2;
