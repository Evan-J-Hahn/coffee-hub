import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import styles from './SearchResults.module.css'

const SearchResults = (props) => {
	if (!props.businesses || !props.businesses.length) {
		return <div></div>
	}

	const SearchResults = props.businesses.map((b) => (
		<SearchResult key={b.id} businesses={b} />
	))

	return <div className={styles['search-results']}>{SearchResults}</div>
}

export default SearchResults
