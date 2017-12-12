import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import {connect} from 'react-redux';
import Toolbar from '../../containers/Toolbar/Toolbar'

class Layout extends Component {

    render () {
        return(
            <Aux>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return{
    };
};

export default connect(null, mapDispatchToProps)(Layout);