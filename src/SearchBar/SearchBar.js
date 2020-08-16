import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
	const [term, setTerm] = useState(props.term || '')
	const [location, setLocation] = useState(props.location || '')

	const sizeClass = props.small ? '' : 'is-medium'

	const submit = (e) => {
		if (typeof props.search === 'function') {
			props.search(term, location)
		}

		e.preventDefault()
	}

	return (
		<form onSubmit={submit}>
			<div className='field has-addons'>
				<div className='control'>
					<button className={`button is-static ${sizeClass}`}>Find</button>
				</div>
				<p className='control'>
					<input
						className={`input ${sizeClass} ${styles['input-control']}`}
						onChange={(e) => setTerm(e.target.value)}
						type='text'
						value={term}
						placeholder='burgers, barbers, spas, handymen...'
					/>
				</p>

				<div className='control'>
					<div className={`button is-static ${sizeClass}`}>Near</div>
				</div>
				<p className='control'>
					<input
						className={`input ${sizeClass} ${styles['input-control']}`}
						onChange={(e) => setLocation(e.target.value)}
						type='text'
						value={location}
						placeholder='where'
					/>
				</p>

				<div
					className={`button ${sizeClass} ${styles['search-button']}`}
					onClick={submit}
				>
					<span className={`icon is-small ${styles['search-icon']}`}>
						<i className='fas fa-search'></i>
					</span>
				</div>
			</div>
		</form>
	)
}

export default SearchBar
