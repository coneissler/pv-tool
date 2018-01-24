import React, {Component} from 'react';
import {connect} from 'react-redux'
// import StatusRect from './StatusRect/StatusRect';
// import RectFlair from './StatusRect/RectFlair/RectFlair';
import ContactSection from './ContactSection/ContactSection'
import cellClasses from '../Cells.css';
import classes from './A2.css'

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
    return(
        <div className={cellClasses.Cell}>
            <svg viewBox='0 0 626 189' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
                 fillRule='evenodd' clipRule='evenodd'
                 strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='1.5'>
                <rect x='166.159' y='76.668' width='268.982' height='23.257' fill='#fff'
                      transform='matrix(2.3273 0 0 8.1265 -386.702 -623.045)' />
                <rect width='534.768' height='58.221' fill='#b0b0b0' transform='matrix(.8491 0 0 .65269 37.927 0)'
                />
                <text fontSize='12.754' fill='#fff'
                      transform='matrix(1.87855 0 0 1.96015 289.849 27.947)'>Constantin Eißler</text>
                <use xlinkHref='#_Image1' width='189' height='169'
                     id='_Image1_' transform='matrix(.86266 0 0 .86982 2 40)'
                />
                <g transform='translate(-4.001 -4.6)'>
                    <use xlinkHref='#_Image2' width='100' height='46' id='_Image2_'
                         transform='matrix(.9995 0 0 .9951 47.393 4.6)' />
                    <path d='M134.411,18.337C134.411,14.222 131.667,10.882 128.287,10.882L73.932,10.882C70.553,10.882 67.809,14.222 67.809,18.337L67.809,33.249C67.809,37.364 70.553,40.704 73.932,40.704L128.287,40.704C131.667,40.704 134.411,37.364 134.411,33.249L134.411,18.337Z'
                          fill='#5f0' fillOpacity='.322' transform='matrix(1.10233 0 0 .90536 -14.089 .248)'
                    />
                    <text fontStyle='italic'
                          fontSize='13.502' fill='#fff' transform='matrix(.88873 0 0 .88873 62.855 28.064)'>Ressortleiter</text>
                </g>
                <rect x='166.159' y='76.668' width='268.982' height='23.257' fill='#b0b0b0'
                      transform='matrix(.98047 0 0 1.07493 23.402 7.587)' />
                <rect x='166.159' y='76.668' width='268.982' height='23.257' fill='#b0b0b0'
                      transform='matrix(.98047 0 0 1.07493 23.767 73.587)' />
                <text fontSize='15' fill='#1e467d'
                      transform='translate(251.916 107.798)'>Beitritt 26.07.2017</text>
                <ellipse cx='189.661' cy='110.309' rx='16.121'
                         ry='15.809' fill='#fff' stroke='#b0b0b0' transform='matrix(.99252 0 0 1.01209 8.008 -9.143)'
                />
                <text fontSize='14.655' fill='#1e467d'
                      transform='translate(186.116 107.798) scale(1.02352)'>6M</text>
                <rect x='166.159' y='76.668' width='268.982' height='23.257'
                      fill='#fff' stroke='#b0b0b0' strokeWidth='.97' transform='matrix(.98047 0 0 1.07493 23.767 40.587)'
                />
                <text fontSize='15' fill='#1e467d'
                      transform='translate(229.676 173.809)'>Technische Universität Berlin</text>
                <ellipse cx='189.661' cy='110.309' rx='16.121'
                         ry='15.809' fill='#fff' stroke='#b0b0b0' transform='matrix(.99252 0 0 1.01209 8.066 56.857)'
                />
                <text fontSize='15' fill='#1e467d'
                      transform='translate(185.48 173.776)'>TU</text>
                <ellipse cx='189.661' cy='110.309' rx='16.121' ry='15.809' fill='#b0b0b0'
                         transform='matrix(.99252 0 0 1.01209 254.268 23.857)' />
                <text fontSize='15' fill='#1e467d'
                      transform='translate(433.212 140.96)'>Inf</text>
                <text fontSize='12.415'
                      fill='#1e467d' transform='translate(184.825 71.05) scale(2.01374)'>Mitglied</text>
                <path d='M579.091,172.797L465.491,172.797L477.987,16.612L579.091,16.612L579.091,172.797Z'
                      fill='#1e467d' transform='matrix(-.39252 0 0 -.2433 227.305 42.042)' />
                <text fontStyle='italic'
                      fontSize='2.003' fill='#fff' transform='translate(6.095 29.898) scale(15.3703)'>HR</text>
                <g>
                    <path d='M579.091,172.797L465.491,172.797L483.091,16.373L579.091,16.612L579.091,172.797Z'
                          fill='#1e467d' transform='matrix(1.45029 0 0 1.21011 -214.099 -20.108)'
                    />
                </g>
                <g>
                    <text fontSize='15' fill='#1e467d'
                          transform='translate(241.106 139.381)'>Studiengang Informatik</text>
                </g>
                <defs>
                    <image id='_Image1' width='189' height='169' xlinkHref='data:image/png;base64,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'>
                        <image id='_Image2' width='100' height='46' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAuCAYAAADeIbxeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEYklEQVR4nO2b246jMBBEKwhF+/9fu4qisA8zzbbL1d0mOw9jz5aEMASM8aEvNuQGoeM4ts+iWo8soDLcvhn1EtsvKlcLeH273bhe7LzDwTD5jt3Rd77ax3CAeWGYXlSOlmewr6vnOI6NoTRACIZ62j2EHS2QDIyvc0aNwDAQm9s2ELs7bnP1dFA6C/mUAsOdr5YIjKp3JmVAnmgBbOgtwrYNFpdPnUASV8Uw7mgh8LaCAswLw6RiBsN4AnigvfcHPvrDYHF9jZUoC4msgy3jjr8wGMpKVlJZh4LxoHMMRuOuIKwkc1kjMHjJgMwGghXFjQyGnWdr9hZ1luXkT/auyAP4hR7IHb3r8vVx+TuLrcPW3lU90FoA35vB48DewcDnQTzuiLKryEIUFI4ngAYzg3gMwXFjRxs3+BwGsaG1FgB4WRypLCTLrEagZC7ru4OJBoPsrhQMbxW7O97KuYUIRRlWFj88lJ9kIREMBudheEtptAfpri8rl1VZiI8jM2daKsPyT7wK4B6E7y+GBxCU4zi2nX5EsF1lXMpyIiCzwDBFc1YqeN/Rghh9IE8w1Ug9AlGlwbZv5bRX/c4wMjDaZdG2ohiNSZQbY6v5CUA4gFdze0Dfz+Vclj/YlxWUbPHHcH0zyWdGPPKu7vtS/KymTmxbgfHlyHpWsRB2LypjUlYQ9VtU79Bsb1Rh1Rh1zCrKYIyAsP1dDHmnk7LOXRUAa+Q+3+qDr+y0lQFU+rJ7f6eiLO2rUsNVNHKvb/VBFEOuXKBq1Coa6fyr/dZJAelmIulk9XREy0q6ct/ZeIXrbFSNQyoQ/IUFz9dUg6IZFE2d+JdTWZ8oMKEyIFFD+MK+YVEuvjoQhhNBeVGdnRiIcldXGuM736YTVkmDq4cxglPBCAeGHgZXEIGwLyoe6DvcoKwM5EGLf6UbgQGV4ctVUB+xjOiNGb8DGJ7P+UbKYqjvfIYyYilcPwBgv91uL/GSKooZ1snq+yM7b3frlUbuo0AYzEigB/Dxre9IluWzpwiEP9agrf6Cir3EA8BvxGCU6+q0Ax9kPq1EmZNKa1XMsN+jdyGruazISjyUKrif29mXi74BG3oYtqiv8/wrzBWsw1RZyUgseSvtVQ3xHw5nsca7qhU+cDBVgV25Li4zmFBRlqX2MRxuYPYeGZgPBCsbBrD74rJydzKWnEBEtsVPBsPgxo3AmBUKu5oMypVBIoD2n1TZbK+C83TbnA6rcYcCMRuUKtHJwHDKG9V7qgFSWInJOt1+t8C/IgzTFSiqPGQdAHBTVw/+9KkmDLNsKnJTs0GJnuwohVUw1PFjf/oUF+fxiRcPEquYMRsMUwbF1uk4Q6ylpIUA4V/cbF1ZEJ+j6plFUdbJ5ajzJQhlHUACBCihjOzj8gpSMHy52hfCAAoggIQCXOv8lYGofVEZQA4DGABiGgCT7VtZFSAANYjzuKtXD8B4/QfiNAriPP5fWjIA50fqKoTm3K9siNfqsP6l0zP9AZK1KRnm+cf/AAAAAElFTkSuQmCC'
                        /></image>
                </defs>
            </svg>
            <div className={classes.Wrapper}>
                <ContactSection grid={this.props.closeSocial&&this.state.socialGrid} open={this.socialClickHandler}/>
            </div>
        </div>
    )
    }
};

const mapStateToProps = () => {
    
    return {

    }
}

export default connect(mapStateToProps)(A2);