import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
// import Button from '../../components/Button';

// // 회원탈퇴, 이름변경 ...버튼
// const NavButton = styled.div`
// display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin: 2.5rem auto 2.5rem auto;
// 	width:100%
// 	width: max-content;
// 	height: 35px;
// 	background-color: white;
// 	color:black;
// 	font-size: 1.2rem;
// 	font-weight: 600;
// 	border-radius: 5px;
// 	/* box-shadow: inset 0 1px 0 0 #e4e4e4; */
// 	&:hover {
// 		cursor: pointer;
// 	}
// 	`;

// const ChangeName = styled.div`
// 	display: flex;
// 	padding-bottom: 1rem;
// `;

// const Input = styled.input`
// 	width: 100%;
// 	height: 36px;
// 	border: 1px solid #babbba;
// 	border-radius: 4px;
// 	padding-left: 8px;
// `;

//변경 버튼
const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	width: 15%;
	height: 35px;
	background-color: #fd8e0d;
	color: #fff;
	font-size: 1.2rem;
	font-weight: 600;
	border: 1px solid #fd8e0d;
	border-radius: 5px;
	box-shadow: inset 0 1px 0 0 #e4e4e4;
	&:hover {
		cursor: pointer;
	}
`;

function Rename() {
	// const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const onClickButton = () => {
		setIsOpen(true);
	};
	return (
		<>
			{/* <profileButton name='sss' event>
				<profileImg onClick={() => navigate('/review')} src={profile} />
			</profileButton> */}
			{/* <Container> */}
			{/* 파일업로드 부분 찾아서 
				<ProfileImg onClick={() => navigate('/review')} src={profile} /><ProfileImg onClick={() => navigate('/review')} src={profile} /> */}
			{/* <ProfileImg src={profile} />
				<Name>김코딩</Name>*/}
			*{' '}
			{/* <NavBox>
					<NavButton>이름변경</NavButton>
					<NavButton>내가 쓴 글</NavButton>
					<NavButton>캘린더</NavButton>
					<NavButton>회원탈퇴</NavButton>
				</NavBox>
				*<ChangeName>이름</ChangeName>
				<Input /> */}
			<Button onClick={onClickButton}>변경</Button>
			{isOpen && (
				<Modal
					open={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			)}
			{/* <Button
					onClick={() => {
						navigate('/mypage');
					}}
				>
					변경
				</Button>
			{/* </Container> */}
		</>
	);
}
export default Rename;
