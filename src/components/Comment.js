import React from "react";
import styled from "styled-components";
import moment from "moment";
import { HeartOutlined } from "@ant-design/icons";
import profile from "../images/profile.jpg";
import colors from "../themes/colors";

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
function Comment({
	id,
	user_name,
	comment,
	created_at,
	post_id,
	likes,
	handleLikeClick,
}) {
	return (
		<CommentCard>
			<ProfileImageContainer>
				<img src={profile} alt="profile-img" />
			</ProfileImageContainer>
			<CommentDetails>
				<div>
					<StyledText fontSize="0.875rem" margin="0 0 0.5rem 0">
						<strong>{user_name} </strong>
						{comment}
					</StyledText>
					<StyledSpan>{moment(created_at).fromNow()}</StyledSpan>
					<StyledSpan>
						{likes} {likes > 1 ? "likes" : "like"}
					</StyledSpan>
					<StyledSpan>Reply</StyledSpan>
				</div>
				<div>
					<StyledLikeIcon
						onClick={() =>
							handleLikeClick({
								id,
								user_name,
								comment,
								post_id,
								created_at,
								likes,
							})
						}
					/>
				</div>
			</CommentDetails>
		</CommentCard>
	);
}

export default React.memo(Comment);
