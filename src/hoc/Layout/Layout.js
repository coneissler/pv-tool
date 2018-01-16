import React, {Component} from 'react';
import Aux from '../AuxComponent/AuxComponent';
import Topbar from '../../containers/Topbar/Topbar'

class Layout extends Component {

    render () {
        return(
            <Aux>
                <Topbar/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;