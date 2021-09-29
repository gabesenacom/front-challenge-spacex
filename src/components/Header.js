import { useState } from 'react'
import Button from './Button'
import Form from './Form'
import { IconSearch } from '@tabler/icons'
import './../styles/Header.css'

const Header = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (launchesLimit, event) => {
    setShowForm(false)
    event.preventDefault()
    onSubmit(launchesLimit)
  }

  const onHeaderButtonClick = () => {
    setShowForm(true)
  }

  const onCloseForm = () => {
    setShowForm(false)
  }

  return (
    <header>
      <h1 className='app-title'>Last Launches 🚀</h1>
      <p className='app-description'>
        Find out what happened on the latest SpaceX launches. Click on a card to
        see more
      </p>
      {showForm && <Form onSubmit={handleSubmit} onClose={onCloseForm} />}
      {!showForm && (
        <Button
          onClick={onHeaderButtonClick}
          text='New search'
          className='search-button'
          icon={IconSearch}
        />
      )}
    </header>
  )
}

export default Header
