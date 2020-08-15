import React from 'react'
import NavBar from '../NavBar/NavBar'
import SubNav from '../NavBar/SubNav/SubNav'
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary'
import SearchResults from './SearchResults/SearchResults'
import useReactRouter from 'use-react-router'
import { useBusinessSearch } from '../Hooks/yelp-api/UseBusinessSearch'

const Search = () => {
	const { location } = useReactRouter()
	const params = new URLSearchParams(location.search)
	const term = params.get('find_desc')
	const locationParam = params.get('find_loc')
	const [
		businesses,
		amountResults,
		searchParams,
		performSearch,
	] = useBusinessSearch(term, locationParam)

	const search = (term, location) => {
		performSearch({ term, location })
	}

	return (
		<div>
			<NavBar term={term} location={locationParam} search={search} />
			<SubNav />
			<SearchResultsSummary
				term={searchParams.term}
				location={searchParams.location}
				total={amountResults}
				totalShown={businesses ? businesses.length : 0}
			/>
			<SearchResults businesses={businesses} />
		</div>
	)
}

export default Search
