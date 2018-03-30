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
        const data = this.props.data
        const projects = data.projects.map((project, key) => (<ProjectChip  onHover={this.hoverProjectHandle} key={key} id={key} project={project}/>))
        if(projects.length === 0) projects.push(<ProjectChip key={69} id={1} onHover={() => null} project={{name: 'Coming Soon ' + String.fromCodePoint(128170)}}/>)
        const display = this.state.displayProject !== -1 && this.props.closeProjects ?
            <ProjectDisplay display={data.projects[this.state.displayProject]}/> :
            <div className={classes.Placeholder}><p>Projects</p></div>
        return(
            <div className={cellClass.Cell}>
                <div className={classes.TopBar}><p className={classes.Header}>6 externe Projekte abgeschlossen</p></div>
                <div className={classes.MainContent}>
                    <div className={classes.StaticNumbers}>
                        <div className={classes.ChipR}>
                            {data.bt} BT
                            <div className={classes.IndicatorBox} title="BT/Zeit">
                                <PerformanceIndicator performance={0}/>
                            </div>
                        </div>
                        <div className={classes.ChipG}>
                            {data.ip} INP
                            <div className={classes.IndicatorBox} title="INP/Zeit">
                                <PerformanceIndicator performance={2}/>
                            </div>
                        </div>
                        <div className={classes.ChipY}>
                            {data.bt/data.inp * 100}%
                            <div className={classes.IndicatorBox} title="BT-INP Verhältniss">
                                <PerformanceIndicator performance={1}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ProjectView} >
                        {projects}
                    </div>
                    <div className={classes.HoverNumbers}>
                        {display}
                    </div>
                </div>
            </div>
        )}
}
export default P2
