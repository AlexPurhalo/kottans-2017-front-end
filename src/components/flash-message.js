// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { addFlashMessage } from '../actions/flash-messages';
import { destroyFlashMessage } from '../actions/flash-messages';

// Images import
import CloseIcon from '../../images/close-icon.png'

// Shows the flash messages
class FlashMessage extends Component {
	constructor() {
		super();

		this.destroyMessageClick = this.destroyMessageClick.bind(this);
	}

	destroyMessageClick() { this.props.destroyFlashMessage()}


	showMessage(message) {
		return (
			<div className={`flash-message-section ${message.type}`}>
				<div className="message">
					<div className="container">
						<div className="row">
							<div className="col-md-11">
								<div className="text">
									{message.text}
								</div>
							</div>
							<div className="col-md-1 right-side">
								<img
									onClick={this.destroyMessageClick}
									className="close-icon"
									src={CloseIcon} alt="close-icon"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.props.message && this.showMessage(this.props.message)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { message: state.flashMessages.message}
}


export default connect(mapStateToProps, { addFlashMessage, destroyFlashMessage })(FlashMessage);
//ssdfsdf
