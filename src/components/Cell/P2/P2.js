import React, {Component} from 'react';
import cellClass from '../Cells.css';
import classes from './P2.css';
import CarouselItem from './CarouselItem'
import CarouselPositionIndicator from './CarouselPositionIndicator'
import motivation from '../../../assets/dont-be-afraid.png'

class P2 extends Component {
  constructor(props){
    super(props)
    this.state = {
      position: 0,
      direction: 'prev',
      sliding: false
    }
    this.getOrder.bind(this)
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { projects } = this.props.data
    const numItems = projects.length || 1
    if (numItems === 2) return itemIndex
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  itemClickHandler = (pos) => {
    if(pos===this.state.position) return
    const direction = pos < this.state.position ? 'prev' : 'next'
    this.doSliding(direction, pos)
  }

  nextSlide = () => {
    const { position } = this.state
    const { projects } = this.props.data
    const numItems = projects.length || 1
    if (numItems === 2 && position === 1) return
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { projects } = this.props.data
    const numItems = projects.length
    if (numItems === 2 && position === 0) return
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }
    render(){
        const data = this.props.data
        const posIndicators = []
        const carouselItems = data.projects.map((prj, index) => {
          const active = data.projects.length === 3 ? ((this.state.position+1)  % data.projects.length) === index : ((this.state.position+2)  % data.projects.length) === index
          posIndicators.push(<CarouselPositionIndicator click={() => this.itemClickHandler(index)} key={index} total={data.projects.length} active={this.state.position === index}/>)
          return <CarouselItem pos={{pos: this.state.position, index: index}} project={prj} active={active} order={this.getOrder(index)} key={index}/>
      })
      let carTransform = 'translateX(-70%)'
      if(data.projects.length === 1){
          carTransform = 'translateX(0)'
      }
      else if(data.projects.length === 2) {
        if (!this.state.sliding && this.state.direction === 'next') carTransform = 'translateX(-70%)'
        else if (!this.state.sliding && this.state.direction === 'prev') carTransform = 'translateX(0%)'
        else if (this.state.direction === 'prev') carTransform = 'translateX(-70%)'
        else carTransform = 'translateX(0%)'
      }else if (data.projects.length === 3){
          carTransform = 'translateX(0%)'
        if(!this.state.sliding) carTransform = 'translateX(-70%)'
        else if (this.state.direction === 'prev') carTransform = 'translateX(calc(2*(-70%)))'
      }
      else{
        if(!this.state.sliding) carTransform = 'translateX(-140%)'
        else if (this.state.direction === 'prev') carTransform = 'translateX(calc(3*(-70%)))'
        }
      const  cursorStyle = (carouselItems.length < 2) ? 'default' : 'pointer'
        return(
            <div className={cellClass.Cell}>
                <div className={classes.TopBar}><p className={classes.Header}>{data.projectsTotal} Projekt{data.projectsTotal !== 1 ? 'e' : ''} abgeschlossen</p></div>
                <div className={classes.MainContent}>
                    <div className={classes.StaticNumbers}>
                        <div className={classes.ChipR}>
                            {data.bt} BT
                            <div className={classes.IndicatorBox} title="BT/Zeit">
                                {/*<PerformanceIndicator performance={0}/>*/}
                            </div>
                        </div>
                        <div className={classes.ChipG}>
                            {data.ip} INP
                            <div className={classes.IndicatorBox} title="INP/Zeit">
                                {/*<PerformanceIndicator performance={2}/>*/}
                            </div>
                        </div>
                        <div className={classes.ChipY}>
                            {data.bt/data.inp * 100}%
                            <div className={classes.IndicatorBox} title="BT-INP Verhältniss">
                                {/*<PerformanceIndicator performance={1}/>*/}
                            </div>
                        </div>
                    </div>
                  <div className={classes.Carousel}>
                    <button className={classes.NextItem} style={{cursor:(data.projects.length === 2 && this.state.position === 1) ? 'default' : cursorStyle}} onClick={this.nextSlide}>

                    </button>
                    <button className={classes.PrevItem} style={{cursor: (data.projects.length === 2 && this.state.position === 0) ? 'default' : cursorStyle}} onClick={this.prevSlide}>

                    </button>
                    <div className={classes.PosIndicator}>
                      {posIndicators}
                    </div>
                    {carouselItems.length === 0 ?
                      <div className={classes.CarouselContainer} style={{margin: '0', justifyContent: 'center'}}>
                        <img className={classes.Img} src={motivation}/>
                      </div>
                      : <div className={classes.CarouselContainer}
                         style={{
                           transition: this.state.sliding ? 'none' : 'transform 0.75s ease',
                           transform: carTransform}}>
                        {carouselItems}
                    </div>}

                  </div>

                </div>
            </div>
        )}
}
export default P2
