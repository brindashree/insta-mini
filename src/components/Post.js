import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	HeartOutlined,
	MessageOutlined,
	SendOutlined,
	SaveOutlined,
	HeartFilled,
} from "@ant-design/icons";
import colors from "../themes/colors";
import profile from "../images/profile.jpg";
import { updatePost } from "../api";

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
		object-fit: cover;
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
const StyledHeartFilledIcon = styled(HeartFilled)`
	font-size: 1.4rem;
	margin: 0.5rem;
	color: ${colors.red};
`;
const StyledComment = styled.p`
	font-size: 0.875rem;
	color: ${colors.primaryGray};
	margin: 0.5rem;
	span {
		margin-right: 0.5rem;
	}
`;
function Post({ singlePost, fetchPosts, comments }) {
	const navigate = useNavigate();

	const [liked, setLiked] = useState(false);
	const [relatedComments, setRelatedComments] = useState([]);

	const fetchRelatedComments = () => {
		const filteredComments = comments
			.reverse()
			.filter((comment) => comment.post_id === parseInt(singlePost.id));
		setRelatedComments(filteredComments);
	};

	useEffect(() => {
		fetchRelatedComments();
	}, [comments]);

	const handleUnLikePost = async (post) => {
		setLiked(false);
		const payload = { ...post, likes: post.likes - 1 };
		await updatePost(post, payload, fetchPosts);
	};

	const handleLikePost = async (post) => {
		setLiked(true);
		const payload = { ...post, likes: post.likes + 1 };
		await updatePost(post, payload, fetchPosts);
	};

	return (
		<>
			<PostHeader>
				<ProfilePic>
					<img src={profile} alt="profile-img" />
				</ProfilePic>
				<div>
					<StyledText fontSize="0.875rem" fontWeight={500}>
						{singlePost.user}
					</StyledText>
					<StyledText fontSize="0.75rem" fontWeight={400}>
						{singlePost?.location}
					</StyledText>
				</div>
			</PostHeader>
			<PostImageContainer>
				<img src={singlePost.image_url} alt="profile-img" />
			</PostImageContainer>
			<UserActions>
				<div>
					{liked ? (
						<StyledHeartFilledIcon
							onClick={() => handleUnLikePost(singlePost)}
						/>
					) : (
						<HeartOutlined onClick={() => handleLikePost(singlePost)} />
					)}
					<MessageOutlined
						onClick={() => navigate(`/comments/${singlePost.id}`)}
					/>
					<SendOutlined />
				</div>
				<div>
					<SaveOutlined />
				</div>
			</UserActions>
			<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0.5rem">
				Liked by <strong>aprendizdeamelie, patricksplace </strong>and{" "}
				<strong>{singlePost.likes} others</strong>
			</StyledText>
			<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0.5rem">
				<strong>{singlePost.user} </strong> {singlePost?.caption}
			</StyledText>
			{relatedComments &&
				relatedComments.slice(0, 2).map((item) => (
					<StyledComment key={item.id}>
						<span>
							<strong>{item.user_name}</strong>
						</span>
						{item.comment}
					</StyledComment>
				))}
		</>
	);
}

export default Post;
