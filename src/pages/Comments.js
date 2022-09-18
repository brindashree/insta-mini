import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { SendOutlined, LeftOutlined } from "@ant-design/icons";
import colors from "../themes/colors";
import { addComment, fetchAllComments, updateComment } from "../api";
import Comment from "../components/Comment";

const MainContainer = styled.div`
	position: relative;
	min-height: 100vh;
`;
const Content = styled.div`
	max-height: calc(100vh - 3rem);
	overflow-y: auto;
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
		const res = await updateComment(comment, payload);
		if (res.ok) {
			fetchComments();
		}
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

	return (
		<MainContainer>
			<Content>
				<HeaderSection>
					<LeftOutlined onClick={() => navigate("/")} />
					<Header>Comments</Header>
				</HeaderSection>
				{comments.length > 0 ? (
					comments.map((item) => (
						<Comment
							{...item}
							key={item.id}
							handleLikeClick={handleLikeClick}
						/>
					))
				) : (
					<p>Be the first to comment..</p>
				)}
			</Content>
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
