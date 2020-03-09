import React from 'react';

const Notifications = (props) => {

	const { notifications } = props;
	return(
		

		<div className="section ">
			<div className="card z-depth-0" style={{opacity: 0.7}}>
				<div className="card-content">
					<span className="card-title">Notifications</span>
					<ul className="notifications">
						{notifications && notifications.map(item => {
							return(
								<li key={item.id}>
									<span class="pink-text ">
										{item.user} {item.content} {new Date(item.time.toDate()).toDateString()}
									</span>
					
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Notifications;
