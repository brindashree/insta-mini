import React, { useState } from "react";
import styled from "styled-components";
import colors from "../themes/colors";
import { useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { addPost } from "../api";

const MainContainer = styled.div`
	position: relative;
	min-height: 100vh;
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
const CustomForm = styled.form`
	padding: 1rem;
	display: flex;
	flex-direction: column;

	label {
		font-size: 0.9rem;
		margin: 0.5rem 0;
	}
	input {
		font-size: 1rem;
		padding: 0.5rem 0.3rem;
		border-radius: 4px;
		border: 2px solid ${colors.textGray};
		margin-bottom: 1rem;
	}

	button {
		background-color: ${colors.ctaBlue};
		border: none;
		border-radius: 4px;
		color: ${colors.white};
		padding: 0.5rem;
		margin: 2rem 0;
		cursor: pointer;
	}
`;
const ErrorText = styled.p`
	font-size: 0.875rem;
	font-weight: 600;
	color: ${colors.red};
	padding: 1rem;
	margin: 0;
`;
function CreatePost() {
	const navigate = useNavigate();
	const [imageUrl, setImageUrl] = useState("");
	const [location, setLocation] = useState("");
	const [caption, setCaption] = useState("");
	const [error, setError] = useState();

	const handleCreatePost = async (e) => {
		e.preventDefault();
		if (imageUrl === "" || caption === "" || location === "") {
			setError("Please enter all fields");
			return;
		}
		const payload = {
			user: "Alex",
			likes: 0,
			image_url: imageUrl,
			caption,
			location,
		};
		const res = await addPost(payload);
		if (res.ok) {
			setCaption("");
			setLocation("");
			setImageUrl("");
			navigate("/");
		}
	};
	return (
		<MainContainer>
			<HeaderSection>
				<LeftOutlined onClick={() => navigate("/")} />
				<Header>Create</Header>
			</HeaderSection>
			{error && <ErrorText>{error}</ErrorText>}
			<CustomForm>
				<label for="imageUrl">Image Url</label>
				<input
					type="text"
					id="imageUrl"
					name="imageUrl"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
				/>
				<label for="location">Location</label>
				<input
					type="text"
					id="location"
					name="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<label for="caption">Caption</label>
				<input
					type="text"
					id="caption"
					name="location"
					value={caption}
					onChange={(e) => setCaption(e.target.value)}
				/>
				<button type="submit" onClick={handleCreatePost}>
					Add Post
				</button>
			</CustomForm>
		</MainContainer>
	);
}

export default CreatePost;
