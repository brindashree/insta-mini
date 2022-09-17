import React from "react";
import styled from "styled-components";
import colors from "../themes/colors";
import profile from "../images/profile.jpg";
import { CaretDownOutlined } from "@ant-design/icons";
import BottomNav from "../components/BottomNav";

const MainContainer = styled.div`
	position: relative;
	min-height: 100vh;
`;
const Content = styled.div`
	/* overflow-y: auto; */
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
function Profile() {
	return (
		<MainContainer>
			<Content>
				<UserName>intercontinental</UserName>
				<ProfileContainer>
					<ProfileImageContainer>
						<div>
							<img src={profile} alt="profile-img" />
						</div>
					</ProfileImageContainer>
					<ProfileDetails>
						<FlexDiv>
							<div>
								<Count>438</Count>
								<CountDetail>posts</CountDetail>
							</div>
							<div>
								<Count>133k</Count>
								<CountDetail>followers</CountDetail>
							</div>
							<div>
								<Count>625</Count>
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
					InterContinental
				</StyledText>
				<StyledText
					color={colors.textGray}
					fontSize="0.875rem"
					fontWeight={500}
					margin="0.5rem 0"
				>
					Travel Company
				</StyledText>
				<StyledText
					color={colors.primaryBlack}
					fontSize="0.875rem"
					fontWeight={500}
					margin="0.5rem 0"
					width="75%"
				>
					The first global luxury hotel brand, pioneering international travel
					for 70 years. Explore the Stories of the #InterContinentalLife
				</StyledText>
				<StyledText
					color={colors.urlBlue}
					fontSize="0.875rem"
					fontWeight={500}
					margin="0.5rem 0 1.5rem 0"
				>
					intercontinental.com/life
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
				<GridContainer>
					<ImageContainer>
						<img src={profile} alt="profile-img" />
					</ImageContainer>
					<ImageContainer>
						<img src={profile} alt="profile-img" />
					</ImageContainer>
					<ImageContainer>
						<img src={profile} alt="profile-img" />
					</ImageContainer>
					<ImageContainer>
						<img src={profile} alt="profile-img" />
					</ImageContainer>
					<ImageContainer>
						<img src={profile} alt="profile-img" />
					</ImageContainer>
					<ImageContainer>
						<img src={profile} alt="profile-img" />
					</ImageContainer>
				</GridContainer>
			</Content>
			<BottomNav />
		</MainContainer>
	);
}

export default Profile;
