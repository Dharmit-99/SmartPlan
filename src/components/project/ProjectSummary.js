import React from 'react'

const ProjectSummary = ({project}) => {
	return(
		<div class="card z-depth-0 project-summary">
			<div class="card-content grey-text text-darken-3">
				<span class="card-title"> {project.title} </span>
				<p> {project.authorFirstName} {project.authorLastName} </p>
				<p class="grey-text"> {new Date(project.datePosted.toDate()).toDateString()} </p>
			</div>
		</div>

	)
}

export default ProjectSummary