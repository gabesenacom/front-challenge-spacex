import Header from './../components/Header'
import CardList from './../components/CardList'

const Dashboard = ({ onSubmit, launches }) => {
  return (
    <section className='dashboard-section'>
      <Header onSubmit={onSubmit} />
      <CardList launches={launches} />
    </section>
  )
}

export default Dashboard
