import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, addDoc, orderBy, query, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import {db} from '../firebase';




const ChatView = ({ currentConversation }) => {
  const [newTitle, setNewTitle] = useState(currentConversation.name)

  useEffect(() => {
    setNewTitle(currentConversation.name)
  }, [currentConversation])

  const updateChatTitle = async e => {
    e.preventDefault()
    const chatRef = doc(db, "messages", currentConversation.id)

    if (newTitle) {
      await updateDoc(chatRef, {
          name: newTitle,
      })
    }
  }

  // const handleChange = event => {
  //   setNewTitle(event.target.value);
  //   console.log("new", handleChange)
  // };

  return (
    <Wrapper>
      <ChatDetails>
        <Avatar>
          {
            currentConversation && <img src={currentConversation.avatar} alt={currentConversation.name} />
          }
        </Avatar>
        <ChatInfo>
          <form onSubmit={updateChatTitle}>
            <Name value={currentConversation ? newTitle : 'Select a chat'} onChange={e => setNewTitle(e.target.value)} disabled={!currentConversation} />
          </form>
          <OnlineIndicator><span>·</span> Online</OnlineIndicator>
        </ChatInfo>
        <Icons>
          <i className='fas fa-video' />
          <i className='fas fa-file-code' />
          <i className='fas fa-phone' />
          <i className='fas fa-volume-up' />
          <i className='fas fa-image' />
        </Icons>
      </ChatDetails>
      <MessagesWrapper>
        <Messages>
          <form>
            <InputWrapper>
              <ActionButton>
                <i className='fas fa-plus' />
              </ActionButton>
              <MessageInput placeholder="Type a message" />
              <ActionButton>
                <i className='fas fa-arrow-circle-up' />
              </ActionButton>
            </InputWrapper>
          </form>
        </Messages>
      </MessagesWrapper>
    </Wrapper>
  )
}

export default ChatView


const Wrapper = styled.div`
    height: 100vh;
    width: calc(98% - 40px);
    max-width: 1600px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`

const ChatDetails = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
`

const Avatar = styled.div`
    height: 56px;
    width: 56px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    margin-right: 20px;
    border: 3px solid #1c91f4;

    & > img {
        height: 60%;
        border-radius: 50%;
    }
`

const ChatInfo = styled.div`
    flex: 1;
`

const Name = styled.input`
    font-size: 28px;
    font-weight: 700;
    background: none;
    border: none;
    outline: none;
`

const OnlineIndicator = styled.div`
    font-weight: 500;
    color: #767789;

    & > span {
        color: #11d930;
        font-size: 3em;
    }
`

const Icons = styled.div`
    display: flex;
    & > i {
        color: #767789;
        font-size: 22px;
        padding: 28px;
        border-radius: 50%;

        &:hover {
            color: #184773;
            cursor: pointer;
        }
    }
`

const MessagesWrapper = styled.div`
    background-color: #323645;
    border-radius: 28px;
    margin-bottom: 50px;
    margin-top: 60px;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    ${'' /* maybe this is where i thought of putting overflow hidden Y */}
    
`

const Messages = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow: scroll;
`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
`

const ActionButton = styled.div`
    margin: 20px;
    padding: 12px;
    height: 30px;
    width: 30px;
    display: grid;
    place-items: center;
    background-color: #424657;
    border-radius: 12px;
    font-size: 24px;

    &:hover{
        background-color: #184773;
        cursor: pointer;
    }
`

const MessageInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background-color: #424657;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;

    &:focus{
        border: 3px solid #184773;
    }
`