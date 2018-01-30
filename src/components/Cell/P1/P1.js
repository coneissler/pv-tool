import React, {Component} from 'react';
import cellClass from '../Cells.css';
import classes from './P1.css';

import {VictoryPie} from 'victory'

class P1 extends Component {
    state = {
        hoverSlice: -1
    }

    render() {
        // check for data
        let bt = 1, inp = 1, percent = 1
        if(this.props.data){
            bt = this.props.data.bt
            inp = this.props.data.ip
            percent = this.props.data.percent
        }

        const topClass = this.state.hoverSlice === 1 ? [classes.TopActiv, classes.CompartimentTop].join(' ') : classes.CompartimentTop
        const middleClass = this.state.hoverSlice === 0 ? [classes.MidActiv, classes.CompartimentMiddle].join(' ') : classes.CompartimentMiddle
        const bottomClass = classes.CompartimentBottom

        return (
            <div className={[cellClass.Cell, classes.P1].join(' ')}>
                <div className={classes.DataNumbers}>
                    <div className={topClass}><span>{bt} BT</span></div>
                    <div className={middleClass}><span>{inp} IP</span></div>
                    <div className={bottomClass}><span>{percent}%</span></div>
                </div>
                <div className={classes.DataVis}>
                    <svg height="100%" viewBox="0 0 400 400">
                        <VictoryPie
                            padding={{top: 20, bottom: 20}}
                            colorScale={["white", "rgb(20,70,125)"]}
                            standalone={false}
                            width={400} height={400}
                            data={[
                                {x: 'BT', y: inp, fillOpacity: 0.9, stroke: "rgb(20,70,125)", strokeWidth: 3},
                                {x: 'IP', y: bt, fillOpacity: 0.9, stroke: "white", strokeWidth: 3}
                            ]}
                            labels={() => null}
                            innerRadius={68}
                            padAngle={4}
                            events={[
                                {
                                    target: "data",
                                    eventHandlers: {
                                        onMouseEnter: () => {
                                            return [{
                                                target: "data",
                                                mutation: (eventProps) => {
                                                    this.setState({hoverSlice: eventProps.index})
                                                    return ({
                                                        style: {...eventProps.style, strokeWidth: 6},
                                                        slice: {
                                                            ...eventProps.slice,
                                                            padAngle: eventProps.slice.padAngle + 0.07,
                                                        },

                                                        origin: {
                                                            x: eventProps.index === 0 ? eventProps.origin.x + 10 : eventProps.origin.x - 10,
                                                            y: eventProps.origin.y
                                                        }
                                                    })
                                                }
                                            }]
                                        },
                                        onMouseLeave: () => {
                                            return [{
                                                target: "data",
                                                mutation: (eventProps) => {
                                                    this.setState({hoverSlice: -1})
                                                    return ({
                                                        style: {...eventProps.style, strokeWidth: 3},
                                                        slice: {
                                                            ...eventProps.slice,
                                                            padAngle: eventProps.slice.padAngle - 0.07,
                                                        },
                                                        origin: {
                                                            x: eventProps.index === 0 ? eventProps.origin.x - 10 : eventProps.origin.x + 10,
                                                            y: eventProps.origin.y
                                                        }

                                                    })
                                                }

                                            }]
                                        }
                                    }
                                }
                            ]}
                        />
                    </svg>
                </div>
            </div>
        )
    }

};

export default P1;
