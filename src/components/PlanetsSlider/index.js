// Write your code here
import './index.css'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachItem => {
            return <PlanetItem eachItem={eachItem} key={eachItem.id} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
