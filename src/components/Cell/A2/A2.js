import React, {Component} from 'react';
// import StatusRect from './StatusRect/StatusRect';
// import RectFlair from './StatusRect/RectFlair/RectFlair';
import Resort from './Resort'
import ContactSection from './ContactSection/ContactSection'
import cellClasses from '../Cells.css';
import classes from './A2.css'

import placeholder from '../../../assets/PlaceHolderSuit.png'


class A2 extends Component {
    state = {
        socialGrid: false
    }

    socialClickHandler = () => {
        const newState = !this.state.socialGrid
        this.setState({ socialGrid: newState })
    };

    componentWillReceiveProps(nextProps) {
        if(!nextProps.closeSocial)
            this.setState({ socialGrid: false })
    }

    render(){

        const months = calculateMonths(this.props.data.joinDate)
        return(
        <div className={[cellClasses.Cell, classes.A2].join(' ')}>
            <div className={classes.Content}>
                <div className={classes.TopBar}></div>
                <div className={classes.MainContent}>
                    <div className={classes.ImgContainer}>
                        <img className={classes.Img} src={placeholder}/>
                    </div>
                    <div className={classes.TextContainer}> MAIN</div>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <ContactSection grid={this.props.closeSocial&&this.state.socialGrid} open={this.socialClickHandler}/>
            </div>










            <div className={classes.SVGBackground}>
            <svg width="100%" height="100%" viewBox='0 0 629 189' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
                 fillRule='evenodd' clipRule='evenodd'
                 strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='1.5'>

                <rect width='534.768' height='58.221' fill="transparent" transform='matrix(.8491 0 0 .65269 37.927 0)'
                />
                <text fontSize='12.754' fill='#fff' textAnchor="end"
                      transform='matrix(1.87855 0 0 1.96015 475.646 27.948)'>{this.props.data.name}</text>
                <path d='M579.091,172.797L465.491,172.797L477.987,16.612L579.091,16.612L579.091,172.797Z'
                      fill='#1e467d' transform='matrix(-.44815 0 0 -.2433 259.52 42.042)' />
                <Resort res={this.props.data.resort}/>
                /*Schräge*/
                <path d='M579.091,172.797L465.491,172.797L483.091,16.373L579.091,16.612L579.091,172.797Z'
                      fill='#1e467d' transform='matrix(1.45029 0 0 1.21012 -210.852 -20.106)'
                />

            </svg>
            </div>

        </div>

    )
    }
};



export default A2;


const calculateMonths = (joinDate) => {
    const today = new Date()
    return today.getMonth() + 1+today.getFullYear()*12-
        parseInt(joinDate.substring(4,7), 10)-
        parseInt(joinDate.substring(6), 10)*12 + 'M'
}