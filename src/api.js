const API_URL = "http://localhost:8000";

// GET REQUESTS
export const fetchAllComments = async () => {
	const result = await fetch(`${API_URL}/comments`)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	return await result;
};
export const fetchAllPosts = async () => {
	const result = await fetch(`${API_URL}/posts`)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	return await result;
};
export const getUser = async () => {
	const result = await fetch(`${API_URL}/user`)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	return await result;
};

// POST REQUESTS
export const addComment = async (payload) => {
	const result = await fetch(`${API_URL}/comments`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	}).catch((err) => console.error(err));
	return await result;
};
export const addPost = async (payload) => {
	const result = await fetch(`${API_URL}/posts`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	}).catch((err) => console.error(err));
	return await result;
};

// PUT REQUESTS
export const updateComment = async (comment, payload, callback) => {
	await fetch(`${API_URL}/comments/` + comment.id, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	}).then((res) => {
		if (res.ok) {
			callback();
		}
	});
};

export const updatePost = async (post, payload, callback) => {
	await fetch(`${API_URL}/posts/` + post.id, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	}).then((res) => {
		if (res.ok) {
			callback();
		}
	});
};
