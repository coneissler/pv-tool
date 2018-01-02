import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';

import Column from '../../components/Column/Column';

class CellBuilder extends Component {
    render() {
        let mappedRows = [];

        for (let i = 0; i < this.props.amount; i++) {
            const newRow =
                (<Row style={{marginBottom: "20px"}} key={i} className="show-grid">
                    <Column type={this.props.col1.element} size={this.props.col1.size}/>
                    <Column type={this.props.col2.element} size={this.props.col2.size}/>
                    <Column type={this.props.col3.element} size={this.props.col3.size}/>
                    <Column type={this.props.col4.element} size={this.props.col4.size}/>
                </Row>);
            mappedRows.push(newRow);

        }
        return(
            <div style={{width: '99%', margin: 'auto', paddingTop: '20px'}}>
                <Grid fluid>
                    {mappedRows}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        amount: state.rowAmount,
        col1: state.col1,
        col2: state.col2,
        col3: state.col3,
        col4: state.col4
    }
};

export default connect(mapStateToProps)(CellBuilder);