import React from 'react'
import styles from './SearchSuggestions.module.css'

const SearchSuggestions = () => {
	return (
		<div className={styles.suggestions}>
			<span className='icon is-small'>
				<i className='fas fa-utensils'></i>
			</span>
			<span className={styles.suggestion}>Restaurants</span>

			<span className='icon is-small'>
				<i className='fas fa-cocktail'></i>
			</span>
			<span className={styles.suggestion}>Night Life</span>

			<span className='icon is-small'>
				<i className='fas fa-concierge-bell'></i>
			</span>
			<span className={styles.suggestion}>Service</span>

			<span className='icon is-small'>
				<i className='fas fa-truck'></i>
			</span>
			<span className={styles.suggestion}>Delivery Service</span>
		</div>
	)
}

export default SearchSuggestions
