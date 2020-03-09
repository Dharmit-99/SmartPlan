import React from 'react'
import {Link } from "react-router-dom"
import SignInLinks from "./SignInLinks.js"
import SignedOutLinks from "./SignedOutLinks.js"
import { connect } from 'react-redux'

const NavBar = (props) => {

	const { auth, profile } = props;

	return(
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to='/' className="brand-logo"> Smart Plan </Link>
				{auth.uid ? <SignInLinks profile={profile}/> : <SignedOutLinks/>}
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(NavBar)