import React, {Component} from 'react';
import VersionParagraph from './VersionParagraph'
import classes from './Roadmap.css'

class Roadmap extends Component {
    constructor(props) {
      super(props)
      this.state = {
        activeView: 0
      }
    }

    viewChangeHandler = (view) => {
      this.setState({activeView: view})
    }

    render(){
      const view1 = this.state.activeView === 0
      const view2 = this.state.activeView === 1
      const containerClass = [classes.BodyContainer, view2 ? classes.View2 : null].join(' ')
        return(
          <div>
            <div className={classes.TopBar}>
              <div className={classes.Button} style={{cursor: view2 ? 'pointer' : 'default'}} onClick={() => this.viewChangeHandler(0)}>
                Versionsverlauf
                <div className={view1 ? classes.ButtonBarActiv : classes.ButtonBar}/>
              </div>
              <div className={classes.Button} style={{cursor: view1 ? 'pointer' : 'default'}} onClick={() => this.viewChangeHandler(1)}>
                Feedback
                <div className={view2 ? classes.ButtonBarActiv : classes.ButtonBar}/>
              </div>
            </div>
            <div className={classes.ViewCut}>
              <div className={containerClass}>
                <div className={classes.Content1}>
                  <VersionParagraph version='0.9'
                                    checkedTasks={['Grafische Nutzer Oberfläche', 'Ausführliche Entwickler Dokumentation in WMS',
                    'Datenbank auf CCT Server gehostet', 'Demo Datensatz erstellt' ,'Einbettung in Dashboard']} openTasks={[]}/>
                  <VersionParagraph version='1.0' checkedTasks={['Grafische Entwicklungsoberfläche implementieren']}
                                    openTasks={['CSV-Export', 'Zugang auf Board beschränken', 'Eingabemaske zum Einpflegen/ Instandhalten der Datensätze',
                                    'Vervollständigung der Datenbasis']}/>
                  <VersionParagraph version='1.1' checkedTasks={[]}
                                    openTasks={['Rechte/Rollen System implementieren','ZVG-Tracking', 'Teilnahme auf Donnerstagssitzung oder anderen Events verfolgen', 'Projektbewerbungen ermöglichen']}/>
                </div>
                <div className={classes.Content2}>Feedback</div>
              </div>
            </div>
            <div className={classes.Impressum}>Copyright © 2018 Company Consulting Team</div>
          </div>
        );
    }
}

export default Roadmap;