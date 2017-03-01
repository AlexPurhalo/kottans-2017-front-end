// Node modules import
import React, {Component} from "react";


// Shows pagination for the posts list
export default class PostsPagination extends Component {
	findLastPage = (objectsCount, pageSize) => Math.round(objectsCount / pageSize);

	nextPageNum = (actualPage, lastPage) => actualPage < lastPage && (
		<li className="inline-block"><button>{actualPage + 1}</button></li>
	);

	prevPageNum = (actualPage, firPage) => actualPage > firPage && (
		<li className="inline-block"><button>{actualPage - 1}</button></li>
	);

	lastPageNum = (actualPage, lastPage) => actualPage + 2 < lastPage && (
		<li className="inline-block"><button>{actualPage + 3 == lastPage ? lastPage : `...${lastPage}`}</button></li>
	);

	firstPageNum = (actualPage, firstPage) => actualPage - 2 > firstPage && (
		<li className="inline-block"><button>{actualPage - 3 == firstPage ? firstPage : `...${firstPage}` }</button></li>
	);

	nextPageSwitch = () => <li className="inline-block"><button>next →</button></li>;

	prevPageSwitch = () => <li className="inline-block"><button>← prev</button></li>;

	currentPageNum = (currentPage) => (
		<li className="inline-block"><button className="active">{currentPage}</button></li>
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

		const prevPageSwitch = this.prevPageSwitch(),
			nextPageSwitch = this.nextPageSwitch();

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
					<ul className="inline-list">{paginationItems}</ul>
				</div>
			</div>
		);
	}
}
