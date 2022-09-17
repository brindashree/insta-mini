import React from "react";
import styled from "styled-components";
import colors from "../themes/colors";
import { HeartOutlined, SendOutlined, LeftOutlined } from "@ant-design/icons";
import profile from "../images/profile.jpg";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
	position: relative;
	min-height: 100vh;
`;
const Header = styled.p`
	color: ${colors.primaryBlack};
	font-weight: 500;
	font-size: 1rem;
	flex: 1;
	margin: 0;
	padding: 0.5rem;
	text-align: center;
	background-color: ${colors.lightGray};
`;

const CommentCard = styled.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0;
`;
const ProfileImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 3rem;
	height: 3rem;
	margin: 1rem;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
`;
const CommentDetails = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 1px solid ${colors.dividerGray};
`;

const StyledText = styled.p`
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	margin: ${(props) => (props?.margin ? props.margin : "0")};
	width: ${(props) => props?.width};
	text-align: ${(props) => props?.textAlign};
`;
const StyledSpan = styled.span`
	font-size: 0.75rem;
	color: ${colors.textGray};
	font-weight: 600;
	margin-right: 1rem;
`;
const StyledLikeIcon = styled(HeartOutlined)`
	cursor: pointer;
	font-size: 1.3rem;
	margin: 1rem;
`;
const PostSection = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	bottom: 0;
	width: 100%;
	background-color: ${colors.lightGray};
	height: 3rem;
`;
const StyledSendIcon = styled(SendOutlined)`
	font-size: 1.3rem;
	padding: 0 1rem;
	rotate: -30deg;
`;
const CustomInput = styled.input`
	font-size: 1rem;
	flex: 1;
	border: none;
	outline: none;
	color: ${colors.primaryBlack};
	background-color: transparent;
	&:focus,
	:focus-visible {
		outline: none;
	}
`;
const CustomBtn = styled.button`
	cursor: pointer;
	color: ${colors.ctaBlue};
	font-size: 1rem;
	font-weight: 600;
	padding: 1rem;
	border: none;
	background-color: transparent;
	&:disabled {
		opacity: 50%;
	}
`;
const HeaderSection = styled.div`
	display: flex;
	align-items: center;
	background-color: ${colors.lightGray};
	border-bottom: 1px solid ${colors.dividerGray};
	.anticon {
		cursor: pointer;
		font-size: 1rem;
		padding: 1rem;
	}
`;
function Comments() {
	const navigate = useNavigate();
	return (
		<MainContainer>
			<HeaderSection>
				<LeftOutlined onClick={() => navigate("/")} />
				<Header>Comments</Header>
			</HeaderSection>
			<CommentCard>
				<ProfileImageContainer>
					<img src={profile} alt="profile-img" />
				</ProfileImageContainer>
				<CommentDetails>
					<div>
						<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0">
							<strong>Lorem </strong>ipsum dolor, sit amet consectetur
							adipisicing elit. Iusto consectetur incidunt molestias ut
							voluptatum voluptatem numquam nihil! Incidunt corporis ducimus
							optio veritatis voluptates eius, enim asperiores, soluta sequi
							deleniti non.
						</StyledText>
						<StyledSpan>5w</StyledSpan>
						<StyledSpan>1 like</StyledSpan>
						<StyledSpan>Reply</StyledSpan>
					</div>
					<div>
						<StyledLikeIcon />
					</div>
				</CommentDetails>
			</CommentCard>
			<CommentCard>
				<ProfileImageContainer>
					<img src={profile} alt="profile-img" />
				</ProfileImageContainer>
				<CommentDetails>
					<div>
						<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0">
							<strong>Lorem </strong>ipsum dolor, sit amet consectetur
							adipisicing elit. Iusto consectetur incidunt molestias ut
							voluptatum voluptatem numquam nihil! Incidunt corporis ducimus
							optio veritatis voluptates eius, enim asperiores, soluta sequi
							deleniti non.
						</StyledText>
						<StyledSpan>5w</StyledSpan>
						<StyledSpan>1 like</StyledSpan>
						<StyledSpan>Reply</StyledSpan>
					</div>
					<div>
						<StyledLikeIcon />
					</div>
				</CommentDetails>
			</CommentCard>
			<PostSection>
				<StyledSendIcon />
				<CustomInput type="text" placeholder="Add a comment" autoFocus={true} />
				<CustomBtn disabled={true}>Post</CustomBtn>
			</PostSection>
		</MainContainer>
	);
}

export default Comments;
