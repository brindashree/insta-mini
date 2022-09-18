import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllPosts, fetchAllComments } from "../api";
import BottomNav from "../components/BottomNav";
import Post from "../components/Post";

const Container = styled.div`
	min-height: 100vh;
	position: relative;
`;
const Content = styled.div`
	max-height: calc(100vh - 3rem);
	overflow-y: auto;
`;
function Home() {
	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPosts = async () => {
		const data = await fetchAllPosts();
		if (data.length) {
			setPosts(data);
			setIsLoading(false);
		}
	};
	const fetchComments = async () => {
		const data = await fetchAllComments();
		if (data.length) {
			setComments(data);
		}
	};
	useEffect(() => {
		fetchPosts();
		fetchComments();
	}, []);

	return (
		<Container>
			<Content>
				{isLoading ? (
					<p>Loading ...</p>
				) : (
					posts.length > 0 &&
					posts.map((post) => (
						<Post
							key={post.id}
							singlePost={post}
							fetchPosts={fetchPosts}
							comments={comments}
						/>
					))
				)}
			</Content>
			<BottomNav />
		</Container>
	);
}

export default Home;
