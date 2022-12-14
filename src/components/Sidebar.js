import styled from "styled-components"
import { useState } from "react";
import { getAuth, signOut } from 'firebase/auth'

const Sidebar = ({ user, setUser }) => {
    const [activeIcon, setActiveIcon] = useState("inbox");
    const auth = getAuth()

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    return (
        <Wrapper>
            <LogoContainer>
                <img src='https://static01.nyt.com/images/2021/02/09/arts/05snoopy1/05snoopy1-mediumSquareAt3X.jpg' alt="snoopy logo" />
            </LogoContainer>
            <SidebarIcons>
                <SidebarIcon onClick={() => setActiveIcon('inbox')}>
                    <i className="fa-solid fa-inbox" style={{color: activeIcon === 'inbox' && '#1d90f4'}} />
                </SidebarIcon>
                <SidebarIcon onClick={() => setActiveIcon('cog')}>
                    <i className="fas fa-cog" style={{color: activeIcon === 'cog' && '#1d90f4'}} />
                </SidebarIcon>
                <SidebarIcon onClick={() => setActiveIcon('user')}>
                    <i className="fas fa-user-circle" style={{color: activeIcon === 'user' && '#1d90f4'}} />
                </SidebarIcon>
                <SidebarIcon onClick={() => setActiveIcon('bolt')}>
                    <i className="fas fa-bolt" style={{color: activeIcon === 'bolt' && '#1d90f4'}} />
                </SidebarIcon>
            </SidebarIcons>
            {/*  */}
            {/*  */}
            {/*  */}
            <ProfileIcon onClick={() => signOut(auth)}>
            <img src={user.avatar} alt={user.name} />
            </ProfileIcon>
            <Button type="button" className="logOut" onClick={() => signOut(auth)}>
                Logout
            </Button>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div `
    height: calc(100vh - 100px);
    padding: 50px 0;
    width: 100px;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const LogoContainer = styled.div`
    height: 70px;
    object-fit: contain;

    & > img {
        height: 100%;
        border-radius: 50%;
    }
`

const SidebarIcons = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SidebarIcon = styled.div`
    & > i {
        color: #767789;
        font-size: 28px;
        padding: 28px;
        border-radius: 50%;

        &:hover {
            color: #184773;
            cursor: pointer;
        }
    }
`


const ProfileIcon = styled.div`
    height: 70px;
    object-fit: contain;
    display: flex;

    & > img {
        height: 80%;
        border-radius: 50%;
        object-fit: contain;

        &:hover {
            -webkit-box-shadow: 0px 5px 24px -3px #000;
            box-shadow: 0px 5px 24px -3px #000;
        }
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.09)
    }
`

const Button = styled.div`
    width: 80px;
    height: 40px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid lime;
    border-radius: 5px;
    font-size: 1.12em;
    font-weight: bolder;
`