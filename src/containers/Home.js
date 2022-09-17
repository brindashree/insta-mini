import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
	const [isLoading, setIsLoading] = useState(true);

	const fetchPosts = () => {
		fetch(" http://localhost:8000/posts")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
			});
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<Container>
			<Content>
				{isLoading ? (
					<p>Loading ...</p>
				) : (
					posts.length > 0 &&
					posts.map((post) => (
						<Post key={post.id} singlePost={post} fetchPosts={fetchPosts} />
					))
				)}
			</Content>
			<BottomNav />
		</Container>
	);
}

export default Home;
