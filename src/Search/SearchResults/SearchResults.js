import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import styles from './SearchResults.module.css'

const SearchResults = ({ businesses }) => {
	if (!businesses || !businesses.length) {
		return <div />
	}

	const SearchResults = businesses.map((b) => (
		<SearchResult key={b.id} business={b} />
	))

	return <div className={styles['search-results']}>{SearchResults}</div>
}

export default SearchResults
