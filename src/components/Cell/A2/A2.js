import React, {Component} from 'react';
// import StatusRect from './StatusRect/StatusRect';
// import RectFlair from './StatusRect/RectFlair/RectFlair';
import ContactSection from './ContactSection/ContactSection'
import cellClasses from '../Cells.css';
import classes from './A2.css'

import placeholder from '../../../assets/PlaceHolderSuit.png'
import GeneralTopBar from '../GeneralTopBar'
import {Modal, Button} from 'react-bootstrap'


class A2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            socialGrid: false,
            socialBackdrop: false,
            imgDimensions: {}
        }
        this.onImgLoad = this.onImgLoad.bind(this)
    }

    socialClickHandler = () => {
        const newState = !this.state.socialGrid
        this.setState({ socialGrid: newState })
    };

    socialBackdropHandler = () => {
        const newState = !this.state.socialBackdrop
        this.setState({ socialBackdrop: newState })
    }


    componentWillReceiveProps(nextProps) {
        if(!nextProps.closeSocial)
            this.setState({
                socialBackdrop: false,
                socialGrid: false })
    }

    onImgLoad = ({target:img}) => {
        this.setState({imgDimensions:{height:img.offsetHeight,
                width:img.offsetWidth}});
    }

    render(){
        // checking for data
        let image, name, resort, memberStatus, joinDate, major, university, imgContainer, months, uniShort;
        if(this.props.data){
            image = typeof this.props.data.img !== 'undefined' ? this.props.data.img : placeholder
            resort = this.props.data.resort
            name = typeof this.props.data.name === 'string' ? this.props.data.name : 'Anonymous'
            memberStatus = this.props.data.memberstatus
            joinDate = typeof this.props.data.joinDate === 'string' ? this.props.data.joinDate : '01.01.2017'
            major = typeof this.props.data.major === 'string' ? this.props.data.major : 'B.Sc. Spaßstudent'
            university = this.props.data.university
            uniShort = this.props.data.uniShort
            months = calculateMonths(joinDate)
            imgContainer = this.state.imgDimensions.width > this.state.imgDimensions.height + 30 ? classes.ImgContainerWidth : classes.ImgContainerHeight
        }else{
            resort = 'No'
            name = 'Anonymous'
            memberStatus = 'Interessent'
            joinDate = '01.01.2017'
            major = 'B.Sc. Spaßstudent'
            university = '-'
            uniShort = '-'
            imgContainer = classes.ImgContainerHeight
            months = calculateMonths(joinDate)
            image = placeholder
        }
        return(
        <div className={[cellClasses.Cell, classes.A2].join(' ')}>
            <div onClick={this.socialBackdropHandler} className={["static-modal", this.state.socialBackdrop && this.props.closeSocial? classes.SocialBackdropActiv: classes.SocialBackdropHidden].join(' ')}>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title style={{display: 'inline', fontSize: '150%'}}>0176344829388</Modal.Title>
                            <Button style={{float: 'right'}} bsStyle="primary">Copy</Button>
                        </Modal.Header>
                    </Modal.Dialog>
                </div>;
            </div>
            <div className={classes.Content}>
                <GeneralTopBar name={name} width='110%' resort={resort}/>
                <div className={classes.MainContent}>
                    <div className={imgContainer}>
                        <img onLoad={this.onImgLoad} alt={name} className={classes.Img} src={image}/>
                    </div>
                    <div className={classes.TextContainer}>
                        <div className={classes.MemberStatus}>{memberStatus}</div>
                        <div className={classes.TextLong}><p>{months}</p>Beitritt: {joinDate}</div>
                        <div className={classes.TextLong}><p>{major.substring(0,5)}</p>{major.substring(6)}</div>
                        <div className={classes.TextLong}><p>{uniShort}</p>{university}</div>
                    </div>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <ContactSection grid={this.props.closeSocial&&this.state.socialGrid} open={this.socialClickHandler} backdrop={this.socialBackdropHandler}/>
            </div>
            <div className={classes.backSVG}>
                <svg height='100%' viewBox='0 0 164 189' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
                     clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
                    <path d='M579.091,172.797L465.491,172.797L483.091,16.373L579.091,16.612L579.091,172.797Z'
                          fill='#1e467d' transform='matrix(1.44595 0 0 1.21018 -673.339 -20.115)'
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

