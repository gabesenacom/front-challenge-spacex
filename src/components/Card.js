import { IconX } from '@tabler/icons'
import LinkButton from './LinkButton'
import Button from './Button'
import './../styles/Card.css'

const Card = ({ image, name, details, date, external_link, expanded }) => {
  function getDetails () {
    if (expanded) return details
    return Array.from(details)
      .splice(0, 120)
      .join('')
      .concat('...')
  }

  return (
    <div className={expanded ? 'card expanded' : 'card'}>
      {expanded && (
        <Button
          icon={IconX}
          type='button'
          className='close-card-button danger'
        />
      )}
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
          onClick={event => event.stopPropagation()}
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
