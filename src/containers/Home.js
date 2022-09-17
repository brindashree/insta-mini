import React from "react";
import BottomNav from "../components/BottomNav";
import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;
	position: relative;
`;

function Home() {
	return (
		<Container>
			<div>Home</div>
			<BottomNav />
		</Container>
	);
}

export default Home;
