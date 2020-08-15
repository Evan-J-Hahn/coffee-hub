import React from 'react'
import BusinessRating from '../../../BusinessRating/BusinessRating'
import styles from './SearchResult.module.css'

const SearchResult = ({ business }) => {
	if (!business) {
		return <div />
	}

	const tags = business.categories.map((category) => (
		<span
			className={`tag ${styles['business-tag']}`}
			key={business.id + category.title}
		>
			{category.title}
		</span>
	))

	const adressLines = business.location.display_address.map((address) => (
		<p key={business.id + address}>{address}</p>
	))

	return (
		<div className={styles['search-result']}>
			<img
				src={business.image_url}
				alt='business'
				className={styles['business-image']}
			/>

			<div className={styles['business-info']}>
				<h2 className='subititle'>{business.name}</h2>
				<BusinessRating
					reviewCount={business.review_count}
					rating={business.rating}
				/>
				<p>
					{business.price} • {tags}
				</p>
			</div>

			<div className={styles['contact-info']}>
				{business.phone}
				{adressLines}
			</div>
		</div>
	)
}

export default SearchResult
