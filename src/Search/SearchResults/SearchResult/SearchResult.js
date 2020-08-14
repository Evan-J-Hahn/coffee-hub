import React from 'react'
import BusinessRating from '../../../BusinessRating/BusinessRating'
import styles from './SearchResult.module.css'

const SearchResult = () => {
	return (
		<div className={styles['search-result']}>
			<img
				src='https://via.placeholder.com/210'
				alt='business'
				className={styles['business-image']}
			/>

			<div className={styles['business-info']}>
				<h2 className='subititle'>Burger Place</h2>
				<BusinessRating />
				<p>
					$$ <span className='tag'>Burgers</span>{' '}
					<span className='tag'>Fest Food</span>{' '}
				</p>
			</div>

			<div className={styles['contact-info']}>
				<p>+17075863063</p>
				<p>Example Street 5</p>
				<p>94928 Berlin</p>
			</div>
		</div>
	)
}

export default SearchResult
