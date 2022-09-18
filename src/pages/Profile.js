import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
	CaretDownOutlined,
	HolderOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from "@ant-design/icons";
import BottomNav from "../components/BottomNav";
import colors from "../themes/colors";
import profile from "../images/profile.jpg";
import { fetchAllPosts } from "../api";

const MainContainer = styled.div`
	position: relative;
	min-height: 100vh;
`;

const Content = styled.div`
	height: calc(100vh - 3rem);
	max-height: calc(100vh - 3rem);
	overflow-y: auto;
`;
const UserName = styled.p`
	color: ${colors.primaryBlack};
	font-weight: 500;
	font-size: 1rem;
	margin: 0;
	padding: 0.5rem;
	text-align: center;
	background-color: ${colors.lightGray};
	border-bottom: 1px solid ${colors.dividerGray};
`;
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
`;
const ProfileImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	div {
		width: 5rem;
		height: 5rem;
		padding: 1rem;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
		}
	}
`;
const ProfileDetails = styled.div`
	flex: 1;
`;
const FlexDiv = styled.div`
	display: flex;
	div {
		flex: 1;
		text-align: center;
		.anticon {
			color: ${colors.textGray};
			font-size: 1.3rem;
			margin: 0.5rem;
		}
	}
`;
const Count = styled.p`
	color: ${colors.primaryBlack};
	font-size: 0.875rem;
	font-weight: 500;
	margin: 0.5rem 0;
`;
const CountDetail = styled.p`
	color: ${colors.textGray};
	font-size: 0.625rem;
	font-weight: 500;
	margin: 0;
`;
const FollowBtn = styled.button`
	color: ${colors.white};
	background-color: ${colors.ctaBlue};
	border: none;
	font-size: 0.875rem;
	flex: 1;
	border-radius: 4px;
	padding: 0.5rem 0.7rem;
	margin: 0.5rem;
	cursor: pointer;
`;
const DropDownIconContainer = styled.div`
	width: 2rem;
	height: 2rem;
	background-color: ${colors.ctaBlue};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 0.5rem;
	border-radius: 4px;
	cursor: pointer;
`;
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
`;
const StyledDropIcon = styled(CaretDownOutlined)`
	&& {
		color: white;
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

const Divider = styled.div`
	height: 1px;
	background-color: ${colors.dividerGray};
	width: 100%;
`;
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
const ImageContainer = styled.div`
	height: 10rem;
	border: 1px solid ${colors.white};
	img {
		width: 100%;
		height: 100%;
	}
`;

function Profile({ user }) {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPosts = async () => {
		const data = await fetchAllPosts();
		if (data.length) {
			setPosts(data.reverse());
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<MainContainer>
			<Content>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<>
						<UserName>{user.name}</UserName>
						<ProfileContainer>
							<ProfileImageContainer>
								<div>
									<img src={profile} alt="profile-img" />
								</div>
							</ProfileImageContainer>
							<ProfileDetails>
								<FlexDiv>
									<div>
										<Count>{posts?.length}</Count>
										<CountDetail>posts</CountDetail>
									</div>
									<div>
										<Count>{user.followers}</Count>
										<CountDetail>followers</CountDetail>
									</div>
									<div>
										<Count>{user.following}</Count>
										<CountDetail>following</CountDetail>
									</div>
								</FlexDiv>
								<ButtonContainer>
									<FollowBtn>Follow</FollowBtn>
									<DropDownIconContainer>
										<StyledDropIcon />
									</DropDownIconContainer>
								</ButtonContainer>
							</ProfileDetails>
						</ProfileContainer>
						<StyledText
							color={colors.primaryBlack}
							fontSize="0.875rem"
							fontWeight={500}
							margin="0.5rem 0"
						>
							{user.name}
						</StyledText>
						<StyledText
							color={colors.textGray}
							fontSize="0.875rem"
							fontWeight={500}
							margin="0.5rem 0"
						>
							{user.company}
						</StyledText>
						<StyledText
							color={colors.primaryBlack}
							fontSize="0.875rem"
							fontWeight={500}
							margin="0.5rem 0"
							width="75%"
						>
							{user.bio}
						</StyledText>
						<StyledText
							color={colors.urlBlue}
							fontSize="0.875rem"
							fontWeight={500}
							margin="0.5rem 0 1.5rem 0"
						>
							{user.company_url}
						</StyledText>
						<Divider />
						<StyledText
							color={colors.ctaBlue}
							fontSize="0.875rem"
							fontWeight={500}
							margin="0.5rem 0"
							textAlign="center"
						>
							Call
						</StyledText>
						<Divider />
						<FlexDiv>
							<div>
								<HolderOutlined />
							</div>
							<div>
								<UnorderedListOutlined />
							</div>
							<div>
								<UserOutlined />
							</div>
						</FlexDiv>
						<Divider />
						<GridContainer>
							{posts?.length > 0 &&
								posts.map((post) => (
									<ImageContainer key={post.id} onClick={() => navigate("/")}>
										<img src={post.image_url} alt="profile-img" />
									</ImageContainer>
								))}
						</GridContainer>
					</>
				)}
			</Content>
			<BottomNav />
		</MainContainer>
	);
}

export default Profile;
