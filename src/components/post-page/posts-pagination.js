// Node modules import
import React, {Component} from "react";


// Shows pagination for the posts list
export default class PostsPagination extends Component {
	findLastPage = (objectsCount, pageSize) => Math.round(objectsCount / pageSize);

	nextPageNum = (actualPage, lastPage) => actualPage < lastPage && (
		<button onClick={e => this.props.fetchPosts(null, actualPage+1)}>{actualPage + 1}</button>
	);

	prevPageNum = (actualPage, firPage) => actualPage > firPage && (
		<button onClick={e => this.props.fetchPosts(null, actualPage-1)}>{actualPage - 1}</button>
	);

	lastPageNum = (actualPage, lastPage) => actualPage + 2 < lastPage && (
		<button onClick={e => this.props.fetchPosts(null, lastPage)}>
			{actualPage + 3 == lastPage ? lastPage : `...${lastPage}`}
		</button>
	);

	firstPageNum = (actualPage, firstPage) => actualPage - 2 > firstPage && (
		<button onClick={e => this.props.fetchPosts(null, 1)}>
			{actualPage - 3 == firstPage ? firstPage : `...${firstPage}` }
		</button>
	);

	nextPageSwitch = actualPage =>
		<button onClick={e => this.props.fetchPosts(null, actualPage + 1)}>next →</button>;

	prevPageSwitch = actualPage =>
		<button onClick={e => this.props.fetchPosts(null, actualPage - 1)}>← prev</button>;

	currentPageNum = (currentPage) => (
		<button className="active">{currentPage}</button>
	);

	render() {
		const { currentPage, pageSize, totalObjects } = this.props;

		const currentPageNum = this.currentPageNum(currentPage),
			firPage = 1,
			lastPage = this.findLastPage(totalObjects, pageSize);

		const nextPageNum = this.nextPageNum(currentPage, lastPage),
			prevPageNum = this.prevPageNum(currentPage, firPage);

		const nextSecPageNum = this.nextPageNum(currentPage+1, lastPage),
			prevSecPageNum = this.prevPageNum(currentPage-1, firPage);

		const lastPageNum = this.lastPageNum(currentPage, lastPage),
			firstPageNum = this.firstPageNum(currentPage, firPage);

		const prevPageSwitch = this.prevPageSwitch(currentPage),
			nextPageSwitch = this.nextPageSwitch(currentPage);

		const paginationItems = [
			prevPageSwitch,
			firstPageNum,
			prevSecPageNum,
			prevPageNum,
			currentPageNum,
			nextPageNum,
			nextSecPageNum,
			lastPageNum,
			nextPageSwitch
		];

		return (
			<div className="container">
				<div className="posts-pagination-section">
					<ul className="inline-list">
						<li className="inline-block">
							{paginationItems.map(item => item)}
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
