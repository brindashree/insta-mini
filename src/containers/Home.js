import React from "react";
import BottomNav from "../components/BottomNav";
import profile from "../images/profile.jpg";
import styled from "styled-components";
import {
	HeartOutlined,
	MessageOutlined,
	SendOutlined,
	SaveOutlined,
} from "@ant-design/icons";
import colors from "../themes/colors";

const Container = styled.div`
	min-height: 100vh;
	position: relative;
`;
const PostHeader = styled.div`
	display: flex;
	background-color: ${colors.lightGray};
	align-items: center;
`;
const ProfilePic = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	margin: 0.5rem 1rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
`;
const PostImageContainer = styled.div`
	height: 23rem;
	width: 100%;
	img {
		width: 100%;
		height: 100%;
	}
`;
const StyledText = styled.p`
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	margin: ${(props) => (props?.margin ? props.margin : "0")};
	width: ${(props) => props?.width};
	text-align: ${(props) => props?.textAlign};
`;
const UserActions = styled.div`
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.anticon {
		font-size: 1.4rem;
		margin: 0.5rem;
	}
`;
function Home() {
	return (
		<Container>
			<PostHeader>
				<ProfilePic>
					<img src={profile} alt="profile-img" />
				</ProfilePic>
				<div>
					<StyledText fontSize="0.875rem" fontWeight={500}>
						gopro
					</StyledText>
					<StyledText fontSize="0.75rem" fontWeight={400}>
						Riene
					</StyledText>
				</div>
			</PostHeader>
			<PostImageContainer>
				<img src={profile} alt="profile-img" />
			</PostImageContainer>
			<UserActions>
				<div>
					<HeartOutlined />
					<MessageOutlined />
					<SendOutlined />
				</div>
				<div>
					<SaveOutlined />
				</div>
			</UserActions>
			<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0.5rem">
				Liked by <strong>aprendizdeamelie, patricksplace </strong>and{" "}
				<strong>320,840 others</strong>
			</StyledText>
			<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0.5rem">
				<strong>gopro </strong> Photo of the Day: That feeling when you kick off
				the hiking boots + relax above it all
			</StyledText>
			<BottomNav />
		</Container>
	);
}

export default Home;
