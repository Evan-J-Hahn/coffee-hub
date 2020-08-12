import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
	return (
		<div>
			<div className='field has-addons'>
				<p className='control'>
					<button className='button is-static is-medium'>Find</button>
				</p>
				<p className='control'>
					<input
						className={`input is-medium ${styles['input-control']}`}
						type='text'
						placeholder='burgers, barbers, spas, handymen...'
					/>
				</p>

				<p className='control'>
					<button className='button is-static is-medium'>Near</button>
				</p>
				<p className='control'>
					<input
						className={`input is-medium ${styles['input-control']}`}
						type='text'
						placeholder='where'
					/>
				</p>

				<div className={`button is-medium ${styles['search-button']}`}>
					<span className='icon is-small'>
						<i className='fas fa-search'></i>
					</span>
				</div>
			</div>
		</div>
	)
}

export default SearchBar
