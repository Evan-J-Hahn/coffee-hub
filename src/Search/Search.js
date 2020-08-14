import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import SearchResults from './SearchResults/SearchResults'
import useReactRouter from 'use-react-router'

const Search = () => {
	const { location } = useReactRouter()
	const params = new URLSearchParams(location.search)
	const termParam = params.get('find_desc')
	const locationParam = params.get('find_loc')

	return (
		<div>
			<NavBar term={termParam} location={locationParam} />
			<SubNav />
			<SearchResultsSummary term={termParam} location={locationParam} />
			<SearchResults />
		</div>
	)
}

export default Search
