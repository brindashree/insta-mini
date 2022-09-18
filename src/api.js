const API_URL = "http://localhost:8000";

const api = (
	endpoint,
	payload,
	method = "GET",
	headers = {
		"Content-Type": "application/json",
	}
) =>
	fetch(`${API_URL}${endpoint}`, {
		method,
		headers,
		body: JSON.stringify(payload),
	}).catch((err) => console.error(err));

// GET REQUESTS
export const fetchAllComments = async () => {
	const result = await api("/comments");
	return await result.json();
};
export const fetchAllPosts = async () => {
	const result = await api("/posts");
	return await result.json();
};
export const getUser = async () => {
	const result = await api("/user");
	return await result.json();
};

// POST REQUESTS
export const addComment = async (payload) => {
	const result = await api("/comments", payload, "POST");
	return await result;
};
export const addPost = async (payload) => {
	const result = await api("/posts", payload, "POST");
	return await result;
};

// PUT REQUESTS
export const updateComment = async (comment, payload) => {
	const result = await api(`/comments/${comment.id}`, payload, "PUT");
	return await result;
};

export const updatePost = async (post, payload, callback) => {
	const result = await api(`/posts/${post.id}`, payload, "PUT");
	return await result;
};
