import { useEffect, useState } from "react"
import styled from "styled-components"
import Home from './Home'
import { getAuth, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { provider } from './firebase'
import baldEagle from './assets/bald-eagle-dep-pexels.jpeg'
import bar from './assets/bar-dep-pexels.jpeg'
import cupcake from './assets/cupcake-dep-pexels.jpeg'
import eTow from './assets/e-tower-dep-pexels.jpeg'
import fox from './assets/fox-dep-pexels.jpeg'
import man from './assets/mansuit-dep-pexels.jpeg'
import weddi from './assets/wedding-dep-pexels.jpeg'
import womTrain from './assets/woman-train-dep-pexels.jpeg'
import merce from './assets/merce-dep-pexels.jpeg'
import chill from './assets/chill-dep-pexels.jpeg'
import thanks from './assets/thanksgiving-dep-pexels.jpeg'
import jatat from './assets/jap-tatted-dep-pexels.jpeg'


const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, userSession => {
      if(userSession) {
        setUser({
          name: userSession.displayName,
          email: userSession.email,
          avatar: userSession.photoURL
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  const handleUserLogin = async () => {
    const login = await signInWithPopup(auth, provider)

    setUser({
      name: login.user.displayName,
      email: login.user.email,
      avatar: login.user.photoURL,
    })
  }

  return(
    <Wrapper>
      {
        user ? (
          <Home user={user} setUser={setUser} />
        ) : (
          <>          
            <Row>
              <img src={baldEagle} alt="" />
              <img src={bar} alt="" />
              <img src={cupcake} alt="" />
              <img src={eTow} alt="" />
            </Row>
            
            <Rowone>
              <img src={fox} alt="" />
              <img src={man} alt="" />
              <img src={weddi} alt="" />
              <img src={womTrain} alt="" />
            </Rowone>
          <SignInContainer>
            <TitleHeader><h1>WHO! CHAT</h1></TitleHeader>
            <Title>Sign in To Continue</Title>
            <SignInButton onClick={handleUserLogin}>
              Log In With Google
            </SignInButton>
          </SignInContainer>
          <Rowtwo>
              <img src={merce} alt="" />
              <img src={chill} alt="" />
              <img src={thanks} alt="" />
              <img src={jatat} alt="" />
            </Rowtwo>
          </>

        )
      }
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  background-color: #282a37;
  min-height: 99.99vh;
  max-height: 99.99vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  ${'' /* align-items: center;
  justify-content: center; */}
`

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 70;
  border: 2px solid white;
  padding-top: 19em;
  padding-bottom: 19em;
  padding-right: 10em;
  padding-left: 10em;
  border-radius: 30px;
  background-color: rgba(0,0,0, 0.7);
`

const TitleHeader = styled.div`
  font-family: 'Fredoka One', cursive;
  transform: translateY(-100px);
  letter-spacing: 5px;
  word-spacing: 10px;
  border-bottom: 6px solid white;
  padding-bottom: 7px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  z-index: 70;
`

const SignInButton = styled.div`
  background-color: #1c91f4;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`

const Row = styled.div`
  display: flex;
  z-index: 60;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 33.33vh;
  max-height: 33.33vh;

  & > img {
    width: 25%;
    height: 33.99vh;
    ${'' /* object-fit: cover; */}
    z-index: 60;
    ${'' /* overflow-y: hidden; */}
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    object-fit: cover;
  }
`

const Rowone = styled.div`
  display: flex;
  z-index: 60;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 33.33vh;
  max-height: 33.33vh;
  position: absolute;
  left: 0;
  top: 33vh;

  & > img {
    width: 25%;
    height: 33.99vh;
    ${'' /* object-fit: cover; */}
    z-index: 60;
    ${'' /* overflow-y: hidden; */}
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`

const Rowtwo = styled.div`
  z-index: 60;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 33.33vh;
  max-height: 33.33vh;
  position: absolute;
  left: 0;
  top: 66vh;
  & > img {
    width: 25%;
    height: 41vh;
    ${'' /* object-fit: cover; */}
    z-index: 60;
    ${'' /* overflow-y: hidden; */}
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`