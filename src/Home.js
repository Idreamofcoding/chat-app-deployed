import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react';

function Home({ user, setUser }) {
  const [conversationData, setConversationData] = useState([])
  const [currentConversation, setCurrentConversation] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('lastUpdated', 'desc'))

    const unsubscribe = onSnapshot(q, snapshot => {
      const conversations = []

      snapshot.docs.map(doc => {
        conversations.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setConversationData(conversations)
    })

    return () => unsubscribe()
    

  }, [])
  

  return (
    <Wrapper>
      <Sidebar user={user} setUser={setUser} />
      <ChatList 
        conversationData={conversationData} 
        setCurrentConversation={setCurrentConversation}
        />
      <Main>
        <ChatView currentConversation={currentConversation} user={user} />
      </Main>
    </Wrapper>
  );
}

export default Home;


const Wrapper = styled.div`
  background-color: #282a37;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

