import { useHistory } from 'react-router-dom'
import LinkButton from './LinkButton'
import './../styles/Card.css'

const Card = ({ id, image, name, details, date, external_link, expanded }) => {
  const history = useHistory()

  const onClick = () => {
    if (expanded) return
    history.push(`/mission/${id}`)
  }

  function getDetails () {
    if (expanded) return details
    return Array.from(details)
      .splice(0, 120)
      .join('')
      .concat('...')
  }

  return (
    <div onClick={onClick} className={expanded ? 'card expanded' : 'card'}>
      {expanded && image && (
        <div className='card-image-container'>
          <img className='card-image' src={image} alt={name} />
        </div>
      )}
      {name && <h4 className='card-name'>{name}</h4>}
      {details && <p className='card-details'>{getDetails()}</p>}
      {date && <p className='card-date'>{date}</p>}
      {expanded && (
        <LinkButton
          className='card-link-button'
          text='See more'
          href={external_link}
          rel='noreferrer'
          target='_blank'
        />
      )}
    </div>
  )
}

export default Card
