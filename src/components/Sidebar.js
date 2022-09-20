import styled from "styled-components"
// import cpLogo from '../assets/cp.png'

const Sidebar = () => {
    return (
        <Wrapper>
            <LogoContainer>
                <img src='https://static01.nyt.com/images/2021/02/09/arts/05snoopy1/05snoopy1-mediumSquareAt3X.jpg' alt="snoopy logo" />
            </LogoContainer>
            <SidebarIcons>
                <SidebarIcon><i className="fa-solid fa-inbox" /></SidebarIcon>
                <SidebarIcon><i className="fas fa-cog" /></SidebarIcon>
                <SidebarIcon><i className="fas fa-user-circle" /></SidebarIcon>
                <SidebarIcon><i className="fas fa-bolt" /></SidebarIcon>
            </SidebarIcons>
            <ProfileIcon>
            <img src='https://static01.nyt.com/images/2021/02/09/arts/05snoopy1/05snoopy1-mediumSquareAt3X.jpg' alt="snoopy logo" />

            </ProfileIcon>
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