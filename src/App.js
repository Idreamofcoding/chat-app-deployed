import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatView from './components/ChatView';

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <ChatList />
      <Main>
        <ChatView />
      </Main>
    </Wrapper>
  );
}

export default App;


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

