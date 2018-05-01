import React, {Component} from 'react';
// import StatusRect from './StatusRect/StatusRect';
// import RectFlair from './StatusRect/RectFlair/RectFlair';
import ContactSection from './ContactSection/ContactSection'
import cellClasses from '../Cells.css';
import classes from './A2.css'

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
        const data = this.props.data
        let imgContainer
        if(data) imgContainer = this.state.imgDimensions.width > this.state.imgDimensions.height + 30 ? classes.ImgContainerWidth : classes.ImgContainerHeight
        else                imgContainer = classes.ImgContainerHeight

        return(
        <div className={[cellClasses.Cell, classes.A2].join(' ')}>
            <div onClick={this.socialBackdropHandler} className={["static-modal", this.state.socialBackdrop && this.props.closeSocial? classes.SocialBackdropActiv: classes.SocialBackdropHidden].join(' ')}>
                <div style={{position: 'absolute', top: '0', left: '0'}} className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title style={{display: 'inline', fontSize: '150%'}}>0176344829388</Modal.Title>
                            <Button style={{float: 'right'}} bsStyle="primary">Copy</Button>
                        </Modal.Header>
                    </Modal.Dialog>
                </div>
            </div>
            <div className={classes.Content}>
                <GeneralTopBar name={data.name} width='110%' resort={data.resort} active={data.active}/>
                <div className={classes.MainContent}>
                    <div className={imgContainer}>
                        <img onLoad={this.onImgLoad} alt={data.name} className={classes.Img} src={data.img}/>
                    </div>
                    <div className={classes.TextContainer}>
                        <div className={classes.MemberStatus}>{data.memberstatus}</div>
                        <div className={classes.TextLong}><p>{data.months}</p>Im CCT seit {data.joinDateMonth}</div>
                        <div className={classes.TextLong}><p>{data.major.substring(0,5)}</p>{data.major.substring(6)}</div>
                        <div className={classes.TextLong}><p>{data.uniShort}</p>{data.university}</div>
                    </div>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <ContactSection socials={data.socials} grid={this.props.closeSocial&&this.state.socialGrid} open={this.socialClickHandler} backdrop={this.socialBackdropHandler}/>
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
}

export default A2;

