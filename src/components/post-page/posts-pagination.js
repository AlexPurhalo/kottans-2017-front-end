
// Node modules import
import React, { Component } from 'react';

// Shows pagination for the posts list
export default class PostsPagination extends Component {
	findLastPage(objectsCount, pageSize) {
		return Math.round(objectsCount / pageSize)
	}

	nextPageNum = (actualPage, lastPage) => {
		console.log(`actualPage: ${actualPage}, lastPage: ${lastPage}`)
		return (
			actualPage < lastPage && (
				<li className="inline-block">
					<button>
						{actualPage + 1}
					</button>
				</li>
			)
		)
	};

	prevPageNum = (actualPage, firPage) => {
		return (
			actualPage > firPage && (
				<li className="inline-block">
					<button>
						{actualPage - 1}
					</button>
				</li>
			)
		)
	};

	lastPageNum(actualPage, lastPage) {
		return (
			actualPage + 2 < lastPage && (
				<li className="inline-block">
					<button>
						{actualPage + 3 == lastPage ? lastPage : `...${lastPage}`}
					</button>
				</li>
			)
		)
	}

	firstPageNum(actualPage, firstPage) {
		return (
			actualPage - 2 > firstPage && (
				<li className="inline-block">
					<button>
						{actualPage - 3 == firstPage ? firstPage : `...${firstPage}` }
					</button>
				</li>
			)
		)
	}

	render() {
		let currentPage = this.props.meta.pageNum,
			pageSize = this.props.meta.pageSize,
			totalObjects = this.props.meta.totalObjects,
			firPage = 1;

		let lastPage = this.findLastPage(totalObjects, pageSize);
		console.log(lastPage)
		let nextPageNum = this.nextPageNum(currentPage, lastPage),
			prevPageNum = this.prevPageNum(currentPage, firPage);

		let nextSecPageNum = this.nextPageNum(currentPage+1, lastPage),
			prevSecPageNum = this.prevPageNum(currentPage-1, firPage);

		let lastPageNum = this.lastPageNum(currentPage, lastPage),
			firstPageNum = this.firstPageNum(currentPage, firPage);

		return (
			<div className="container">
				<div className="posts-pagination-section">
					<ul className="inline-list">
						<li className="inline-block">
							<button>
								← prev
							</button>
						</li>
						{firstPageNum}
						{prevSecPageNum}
						{prevPageNum}
						<li className="inline-block">
							<button className="active">
								{currentPage}
							</button>
						</li>
						{nextPageNum}
						{nextSecPageNum}
						{lastPageNum}
						<li className="inline-block">
							<button>
								next →
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
