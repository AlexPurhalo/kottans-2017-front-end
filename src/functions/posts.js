export function normalizePosts(data) {
	let toReducer = [];

	function findVotes(votesArr) {
		let likesCount = 0, dislikesCount = 0, i;

		for (i = 0; i < votesArr.length; i++) {
			if (votesArr[i].like === true) { likesCount += 1 } else { dislikesCount += 1 }
		}

		return { likes: likesCount, dislikes: dislikesCount }
	}

	function normalizeCreateDate(date) {
		let normalizedDate = '', i;

		for (i = 0; i < 10; i++) { if (date[i] == '-') { normalizedDate += ' ' } else { normalizedDate += date[i] } }

		return normalizedDate
	}

	function normalizeComments(comments) {
		let normalizedComments = [], i;

		for (i = 0; i < comments.length; i++) {
			normalizedComments.push({
				id: comments[i].id,
				body: comments[i].body,
				createdDate: comments[i].created_at,
				author: comments[i].user.username
			})
		}

		return normalizedComments
	}
	data.map(post => {
		toReducer.push({
			id: post.id,
			title: post.title,
			description: post.description,
			author: post.user.username,
			categories: post.categories.map(category => category.name),
			votes: findVotes(post.votes),
			date: normalizeCreateDate(post.created_at),
			comments: normalizeComments(post.comments)
		})
	});

	return toReducer;
}
