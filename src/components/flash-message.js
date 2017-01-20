// Node modules import
import React, { Component } from 'react';

// Images import
import CloseIcon from '../../images/close-icon.png'

// Shows the flash messages
export default class FlashMessage extends Component {
	render() {
		return (
			<div className="flash-message-section info-message">
				<div className="message">
					<div className="container">
						<div className="row">
							<div className="col-md-11">
								<div className="text">
									Hello World
								</div>
							</div>
							<div className="col-md-1 right-side">
								<img
									className="close-icon"
									src={CloseIcon} alt="close-icon"/>
							</div>
						</div>
					</div>
					</div>
			</div>
		)
	}
}
