export function normalizeUserAnswers(data) {
	let normalizedData = [];

	data.map(answer =>
		normalizedData.push({
			id: answer.id, body: answer.body, questionId: answer.question.id
		})
	);

	return normalizedData;
}
