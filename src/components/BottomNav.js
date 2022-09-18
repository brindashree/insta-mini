import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
	HomeOutlined,
	SearchOutlined,
	PlusSquareOutlined,
	HeartOutlined,
} from "@ant-design/icons";
import colors from "../themes/colors";
import profile from "../images/profile.jpg";

const FlexContainer = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	bottom: 0;
	height: 3rem;
	background-color: ${colors.lightGray};
`;
const IconContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	img {
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
	}

	.anticon {
		font-size: 1.3rem;
	}
`;
function BottomNav() {
	const navigate = useNavigate();

	return (
		<FlexContainer>
			<IconContainer onClick={() => navigate("/")}>
				<HomeOutlined />
			</IconContainer>
			<IconContainer>
				<SearchOutlined />
			</IconContainer>
			<IconContainer>
				<PlusSquareOutlined onClick={() => navigate("/create")} />
			</IconContainer>
			<IconContainer>
				<HeartOutlined />
			</IconContainer>
			<IconContainer onClick={() => navigate("/profile")}>
				<img src={profile} alt="profile-img" />
			</IconContainer>
		</FlexContainer>
	);
}

export default BottomNav;
