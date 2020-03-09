import React from 'react';
import ProjectSummary from "./ProjectSummary.js"
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
	return(
		<div class="project-list section">
			{
				projects && projects.map(project => {
					return(
						<Link to={'/project/' + project.id} key={project.id}>
							<ProjectSummary project={project} />
						</Link>
					)
				})
			}
			
		</div>
	)
}

export default ProjectList;