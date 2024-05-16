// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {id, name, imageUrl, description} = eachItem
  return (
    <div className="detail-cont">
      <img src={imageUrl} alt={name} className="img-size" />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-heading">{description}</p>
    </div>
  )
}

export default PlanetItem
