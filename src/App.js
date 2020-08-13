import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import Search from './Search/Search'
import { Switch, Route } from 'react-router-dom'

const App = () => {
	return (
		<Switch>
			<Route path='/search' component={Search} />
			<Route path='/' component={LandingPage} />
		</Switch>
	)
}

export default App
