import React from 'react'
import styles from './SearchResultsSummary.module.css'

const SearchResultsSummary = (props) => {
	let resultStats = null

	if (props.total && props.totalShown) {
		resultStats = (
			<p>
				Showing 1-{props.totalShown} out of {props.total} results
			</p>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles['search-summary']}>
				<h1 className='subtitle'>
					<strong>{props.term}</strong> {props.location}
				</h1>

				{resultStats}
			</div>

			<div className={styles.filters}>
				<button className='button'>
					<span className='icon'>
						<i className='fas fa-sliders-h' />
					</span>
					<span>All Filters</span>
				</button>

				<div className='buttons has-addons'>
					<button className='button'>$</button>
					<button className='button'>$$</button>
					<button className='button'>$$$</button>
					<button className='button'>$$$$</button>
				</div>

				<button className='button'>
					<span className='icon'>
						<i className='fas fa-clock' />
					</span>
					<span>Open Now</span>
				</button>
			</div>
		</div>
	)
}

export default SearchResultsSummary
