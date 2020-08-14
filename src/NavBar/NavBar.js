import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = (props) => {
	return (
		<div className={styles['nav-bar']}>
			<Link to='/'>
				<img src={logo} className={styles.logo} alt={logo} />
			</Link>
			<SearchBar small term={props.termParam} location={props.locationParam} />
			<button className={`button ${styles['nav-button']}`}>Sign In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	)
}

export default NavBar
