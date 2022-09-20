import React from 'react'
import styled from 'styled-components'
// import cpLogo from '../assets/cp.png'


const conversationData = [
  {
    name: 'pwr chat',
    avatar: 'https://static01.nyt.com/images/2021/02/09/arts/05snoopy1/05snoopy1-mediumSquareAt3X.jpg',
    lastMessage: 'Hello, how are you?',
  },
  {
    name: 'pwr chat',
    avatar: 'https://static01.nyt.com/images/2021/02/09/arts/05snoopy1/05snoopy1-mediumSquareAt3X.jpg',
    lastMessage: 'Hello, how are you?',
  }
]

const ChatList = () => {
  return (
    <Wrapper>
      <Title>Chats</Title>
      <Subtitle>Latest Conversations</Subtitle>
      <Conversations>
        {conversationData.map((conversation, index) => (
          <ConversationCard key={index}>
            <Avatar>
              <img src={conversation.avatar} alt={conversation.name} />
            </Avatar>
            <ConversationInfo>
              <Name>{conversation.name}</Name>
              <LastMessage>{conversation.lastMessage}</LastMessage>
            </ConversationInfo>
          </ConversationCard>
        ))}
      </Conversations>
    </Wrapper>
  )
}

export default ChatList


const Wrapper = styled.div`
  width: 300px;
  height: calc(100vh - 100px);
  padding: 50px 32px;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const Subtitle = styled.div`
  color: #767789;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Conversations = styled.div`

`

const ConversationCard = styled.div`
  display: flex;
  margin: 12px -12px;
  padding: 12px;
  border-radius: 12px;

  &:hover {
    background-color: #184773 !important;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  width: 60px;
  margin-right: 12px;
  display: grid;
  place-items: center;

  & > img {
    width: 80%;
    object-fit: contain;
  }
`;

const ConversationInfo = styled.div`

`

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const LastMessage = styled.div`
  font-weight: 500;
`;