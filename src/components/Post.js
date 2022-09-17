import React, { useState } from "react";
import profile from "../images/profile.jpg";
import styled from "styled-components";
import {
	HeartOutlined,
	MessageOutlined,
	SendOutlined,
	SaveOutlined,
	HeartFilled,
} from "@ant-design/icons";
import colors from "../themes/colors";
import { useNavigate } from "react-router-dom";
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
const StyledHeartFilledIcon = styled(HeartFilled)`
	.anticon {
		font-size: 1.4rem;
		margin: 0.5rem;
		color: ${colors.red};
	}
`;
function Post({ singlePost, fetchPosts }) {
	const navigate = useNavigate();
	const [liked, setLiked] = useState(false);
	const handleUnLikePost = (post) => {
		setLiked(false);
		const updatedPost = { ...post, likes: post.likes - 1 };
		fetch("http://localhost:8000/posts/" + post.id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedPost),
		}).then(() => {
			fetchPosts();
		});
	};
	const handleLikePost = (post) => {
		setLiked(true);
		const updatedPost = { ...post, likes: post.likes + 1 };
		fetch("http://localhost:8000/posts/" + post.id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedPost),
		}).then(() => {
			fetchPosts();
		});
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
					<MessageOutlined onClick={() => navigate("/comments")} />
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
		</>
	);
}

export default Post;
