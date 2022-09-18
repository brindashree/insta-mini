import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { HeartOutlined, SendOutlined, LeftOutlined } from "@ant-design/icons";
import profile from "../images/profile.jpg";
import colors from "../themes/colors";
import { addComment, fetchAllComments, updateComment } from "../api";

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
	width: 3rem;
	height: 3rem;
	margin: 1rem;
	img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
`;
const CommentDetails = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 1rem;
	align-items: center;
	padding: 1rem 0;
	border-bottom: 1px solid ${colors.dividerGray};
	.anticon {
		cursor: pointer;
		font-size: 1rem;
		color: ${colors.textGray};
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
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
	const { postId } = useParams();

	const fetchComments = async () => {
		const data = await fetchAllComments();
		const filteredComments = data.filter(
			(comment) => comment.post_id === parseInt(postId)
		);
		setComments(filteredComments);
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const handleLikeClick = async (comment) => {
		const payload = { ...comment, likes: comment.likes + 1 };
		await updateComment(comment, payload, fetchComments);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			comment,
			user_name: "Alex",
			post_id: parseInt(postId),
			likes: 0,
			created_at: moment(),
		};
		const res = await addComment(payload);
		if (res.ok) {
			setComment("");
			fetchComments();
		}
	};
	const navigate = useNavigate();

	const renderCommentCard = (item, i) => {
		return (
			<CommentCard key={i}>
				<ProfileImageContainer>
					<img src={profile} alt="profile-img" />
				</ProfileImageContainer>
				<CommentDetails>
					<div>
						<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0">
							<strong>{item.user_name} </strong>
							{item.comment}
						</StyledText>
						<StyledSpan>{moment(item.created_at).fromNow()}</StyledSpan>
						<StyledSpan>
							{item.likes} {item.likes > 1 ? "likes" : "like"}
						</StyledSpan>
						<StyledSpan>Reply</StyledSpan>
					</div>
					<div>
						<StyledLikeIcon onClick={() => handleLikeClick(item)} />
					</div>
				</CommentDetails>
			</CommentCard>
		);
	};
	return (
		<MainContainer>
			<HeaderSection>
				<LeftOutlined onClick={() => navigate("/")} />
				<Header>Comments</Header>
			</HeaderSection>
			{comments.length > 0 &&
				comments.map((comment, i) => renderCommentCard(comment, i))}
			<form>
				<PostSection>
					<StyledSendIcon />

					<CustomInput
						type="text"
						placeholder="Add a comment"
						autoFocus={true}
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<CustomBtn disabled={comment.length === 0} onClick={handleSubmit}>
						Post
					</CustomBtn>
				</PostSection>
			</form>
		</MainContainer>
	);
}

export default Comments;
