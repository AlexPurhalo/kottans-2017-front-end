// Node modules import
import React, { Component } from 'react';

// Shows event's party
export default class EventGroup extends Component {
	constructor() {
		super();

		this.state = { participation: false };

		this.participationClick = this.participationClick.bind(this);
	}

	participationClick() {

		this.setState({participation: !this.state.participation})
	}

	renderUsersList(users) {
		let i = 0, usersList = [];
		console.log(i);
		for (i; i < users.length; i++) {
			usersList.push(
				<li className="inline-block user" key={users[i].id}>
					{users[i].username}{i >= 0 && i < users.length-1 && ','}
				</li>
			);
		}

		return usersList;
	}

	render() {
		const users = this.props.eventGroup.users;
		return (
			<div className="event-party">
				<hr/>
				<div className="title-section">
					<div className="row">
						<div className="col-md-9">
							<div className="title">The event group</div>
						</div>
						<div className="col-md-3 right-side">
							<iv className="people-count">5 people</iv>
						</div>
					</div>
				</div>
				<ul className="inline-list users-list">
					{this.renderUsersList(users)}
				</ul>
				{this.props.allowParticipation && (
					<div className="choice-section right-side">
						<button className="choice-btn non-styled-btn">
							<ul className="inline-list" onClick={this.participationClick}>
								<li className="inline-block text-li">
									<div className="text">
										{this.state.participation ? "I won't come" : 'I will come'}
									</div>
								</li>
								<li className="inline-block">
								<span className={`circle ${this.state.participation ? 'minus' : 'plus'}`}>
									{this.state.participation ? '-1' : '+1'}
								</span>
								</li>
							</ul>
						</button>
					</div>
				)}
			</div>
		)
	}
}
