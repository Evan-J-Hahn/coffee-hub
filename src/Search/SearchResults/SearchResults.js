import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import Spinner from '../../Spinner/Spinner'
import styles from './SearchResults.module.css'

const SearchResults = ({ businesses }) => {
	let searchResults = <Spinner />
	if (businesses && businesses.length) {
		searchResults = businesses.map((b) => (
			<SearchResult key={b.id} business={b} />
		))
	}

	return <div className={styles['search-results']}>{searchResults}</div>
}

export default SearchResults
