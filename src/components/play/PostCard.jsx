import styled from 'styled-components';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function PostCard({post})  {
  const navigate = useNavigate();


  // const [category, setCategory] = useState('술');
  // const [title, setTitle] = useState('범계에서 오늘 저녁 술먹어요');
  // const [people, setPeople] = useState(8);
  // const [place, setPlace] = useState('범계 용용선생');
  // const [meetingTime, setMeetingTime] = useState('2시간');
  // const [postImage, setPostImage] = useState('http://placekitten.com/200/200');
  // const [userImage, setUserImage] = useState('http://placekitten.com/200/200');
  // const [content, setContent] = useState('재밌게 놀사람 오세요~');
  // const [nickname, setNickname] = useState('억만추');

  return(
    <PostBox onClick = {() => navigate(`/playdetail/${post.post_id}`)}>
      <SubDiv>
        <p>카테고리 : {post.post_type}</p>
        <p>남은남자 자리 : {post.recruited_m}</p>
        <p>남은여자 자리 : {post.recruited_f}</p>
        <p>{post.meeting_time}</p>
      </SubDiv>
      <SubDiv style={{alignItems: "flex-start"}}>
        <p>제목 : {post.post_title}</p>
        <p>장소 : {post.place}</p>
        <p>{post.post_content}</p>
        <ProfileDiv>
          <img src={post.profile_image} alt="유저 프로필" style={{ height: '2.5rem', width: '2.5rem', borderRadius: '50%', backgroundColor: '#F9FAFB', marginRight: '20px' }} />
          <span>{post.User.nickname}</span>
        </ProfileDiv>
      </SubDiv>
      <SubDiv style={{justifyContent: 'center'}}>
        <img src={post.post_image} alt="postImage" style={{width: "150px", height: "150px", marginTop: "10px", marginRight: "10px"}}/>
      </SubDiv>
    </PostBox>
  );
};


export default PostCard;

const PostBox = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin: 30px 50px 30px 50px;
  padding: 30px 30px 10px 30px;
  cursor: pointer;
  `

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
`
