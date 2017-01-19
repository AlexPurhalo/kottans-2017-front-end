// Node modules import
import React, {Component} from "react";

// Shows the post comments
export default class Comments extends Component {
	render() {
		return (
			<div className="comments-section">
				<div className="row">
					<div className="col-md-9">
						<h2 className="section-title">Discussions</h2>
					</div>
					<div className="col-md-3 right-side">
						<span className="comments-count">3 comments</span>
					</div>
				</div>
				<ul className="comments-list">
					<li className="comment-item">
						<ul className="inline-list">
							<li className="inline-block">
								<h5 className="author">Alex</h5>
							</li>
							<li className="inline-block">
								<span className="date">21:42 12.09</span>
							</li>
						</ul>
						<p className="body">Asymmetrical quinoa gochujang, mixtape intelligentsia umami coloring book craft beer meditation typewriter fanny pack.</p>
						<hr/>
					</li>
					<li className="comment-item">
						<ul className="inline-list">
							<li className="inline-block">
								<h5 className="author">Brandon</h5>
							</li>
							<li className="inline-block">
								<span className="date">18:43 10.12</span>
							</li>
						</ul>
						<p className="body">Asymmetrical quinoa gochujang, mixtape intelligentsia umami coloring book</p>
						<hr/>
					</li>
					<li className="comment-item">
						<ul className="inline-list">
							<li className="inline-block">
								<h5 className="author">Brandon</h5>
							</li>
							<li className="inline-block">
								<span className="date">03:23 01.09</span>
							</li>
						</ul>
						<p className="body">Asymmetrical quinoa gochujang, mixtape intelligentsia umami coloring book Go g I love cats and dogs and al the animals on the Earth. I love and hate this fucking world :D I know I'm weirdo.</p>
					</li>
				</ul>
			</div>
		);
	}
}
