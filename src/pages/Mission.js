import { useEffect, useState } from 'react'
import { IconArrowBack } from '@tabler/icons'
import { useParams, Link } from 'react-router-dom'
import { getLaunch } from './../api/query_data'
import Card from './../components/Card'
import './../styles/Mission.css'

const Mission = () => {
  const { id } = useParams()
  const [launch, setLaunch] = useState({})

  const fetchLaunch = () => {
    getLaunch(id).then(data => {
      setLaunch(data)
    })
  }

  useEffect(() => {
    fetchLaunch()
  // eslint-disable-next-line
  }, [id])

  let missionContent

  if (launch && Object.keys(launch).length > 0) {
    missionContent = (
      <Card
        expanded={true}
        image={launch.image}
        name={launch.name}
        details={launch.details}
        date={launch.date}
        external_link={launch.ref_link}
      />
    )
  } else {
    missionContent = <p>Mission not found.</p>
  }

  return (
    <section className='mission-section'>
      <Link to='/' className='button mission-back-btn'>
        <IconArrowBack />
        back to home
      </Link>
      {missionContent}
    </section>
  )
}

export default Mission
