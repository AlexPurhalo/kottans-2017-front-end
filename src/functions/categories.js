export function normalizeCategories(data) {
	let toReducer = [];

	data.map(category =>
		toReducer.push({ id: category.id, name: category.name})
	);

	return toReducer
}

export function adapteLink(categoryName) {
	let changedName = '', i;

	for (i = 0; i < categoryName.length; i++) {
		if (categoryName[i] === ' ') {
			changedName += '+'
		} else {
			changedName += categoryName[i]
		}
	}

	return changedName
}
