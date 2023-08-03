import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {imgUrl, name} = item

  return (
    <li className="list-item">
      <img className="img" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
