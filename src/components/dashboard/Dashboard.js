import React, {Component} from "react"
import Notifications from "./Notifications.js"
import ProjectList from "../project/ProjectList.js"
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase"
import {compose} from "redux"
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
	
	render(){

		
		const {projects, auth, notifications} = this.props;
		if(!auth.uid){
			return (<Redirect to="/signin"/>)
		}
		return(
			<div class="dashboard container">
				<div class="row">
					<div class="col s12 m6">
						<ProjectList projects={projects}/>
					</div>
					<div class="col s12 m5 offset-m1">
						<Notifications notifications={notifications}/>

					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	
	return {
		
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects', orderBy: ['datePosted', 'desc']},
		{collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
	])
)(Dashboard)
