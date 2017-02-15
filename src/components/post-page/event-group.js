// Node modules import
import React, { Component } from 'react';

// Shows event's party
export default class EventGroup extends Component {
	participationClick = () => { this.props.addUserToPartyOrRemove(this.props.postId) };

	renderUsersList(users) {
		let i = 0, usersList = [];

		for (i; i < users.length; i++) {
			usersList.push(
				<li className="inline-block user" key={users[i].id}>
					{users[i].username}{i >= 0 && i < users.length-1 && ','}
				</li>
			);
		}

		return usersList;
	}

	userInList() {
		const arr = this.props.eventGroup.users, userId = localStorage.getItem('userId');
		let userExist = false;

		for (let i = 0; i < arr.length; i++) { if (arr[i].id == userId) { userExist = true } }

		return userExist;
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
							<div className="people-count">{users.length > 1 && `${users.length} people`}
							</div>
						</div>
					</div>
				</div>
				<ul className="inline-list users-list">
					{this.renderUsersList(users)}
				</ul>
				{this.props.authenticated && (
					<div className="choice-section right-side">
						<button className="choice-btn non-styled-btn">
							<ul className="inline-list" onClick={this.participationClick}>
								<li className="inline-block text-li">
									<div className="text">
										{this.userInList() ? "I won't come" : 'I will come'}
									</div>
								</li>
								<li className="inline-block">
								<span className={`circle ${this.userInList() ? 'minus' : 'plus'}`}>
									{this.userInList() ? '-1' : '+1'}
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
