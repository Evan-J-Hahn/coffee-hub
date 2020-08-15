import React from 'react'
import Rating from 'react-rating'
import styles from './BusinessRating.module.css'

const BusinessRating = ({ reviewCount, rating }) => {
	return (
		<div className={styles.rating}>
			<Rating
				emptySymbol='far fa-star'
				fullSymbol='fas fa-star'
				fractions={2}
				readonly
				initialRating={rating}
			/>

			<p>{reviewCount} Reviews</p>
		</div>
	)
}

export default BusinessRating
