import { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { getLaunches } from './api/query_data'
import Mission from './pages/Mission'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [latestLaunchesLimit, setLatestLaunchesLimit] = useState(10)
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    setLaunches([])
    getLaunches(latestLaunchesLimit).then(data => setLaunches(data))
  }, [latestLaunchesLimit])

  const onUpdateLatestLaunchesLimit = launchesLimit => {
    setLatestLaunchesLimit(launchesLimit)
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard
            launches={launches}
            onSubmit={onUpdateLatestLaunchesLimit}
          />
        </Route>
        <Route path='/mission/:id'>
          <Mission />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
