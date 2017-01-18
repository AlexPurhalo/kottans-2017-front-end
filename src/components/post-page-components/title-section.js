// Node modules import
import React, { Component } from 'react';

// Shows title section for the posts list
export default class TitleSection extends Component {
	render() {
		return (
			<div className="title-section">
				<div className="row">
					<div className="col-md-8">
						<h1 className="title">{this.props.title}</h1>
					</div>
					<div className="col-md-4">
						<div className="votes right-side">
							<ul className="inline-list">
								<li className="inline-block">
												<span className="plus">
													+
												</span>
								</li>
								<li className="inline-block">
												<span className="plus-number">
													{this.props.likes}
												</span>
								</li>
								<li className="inline-block">
												<span className="separator">
												</span>
								</li>
								<li className="inline-block">
												<span className="minus-number">
													{this.props.dislikes}
												</span>
								</li>
								<li className="inline-block">
												<span className="minus">
													-
												</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
