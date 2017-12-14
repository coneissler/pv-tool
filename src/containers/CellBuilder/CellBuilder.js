import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cell from '../Cell/Cell'

class CellBuilder extends Component {
    render() {
        return(
            <div>
                <Cell/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{

    }
};

export default connect()(CellBuilder);