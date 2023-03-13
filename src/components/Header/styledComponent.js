import styled from 'styled-components'

export const MainContHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : 'transparent')};
  height: 10vh;
`

export const ItemsCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  margin: 10px;
`

export const ProfileImg = styled.img`
  width: 25px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid;
  border-color: ${props => (props.isDark ? '#fff' : '#3b82f6')};
  padding: 5px 10px;
  color: ${props => (props.isDark ? '#fff' : '#3b82f6')};
  border-radius: 2px;
  cursor: pointer;
`

export const ItemsContMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (!props.isDark ? '#181818' : '#fff')};
  cursor: pointer;
  margin-right: 10px;
`

export const PopUp = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
  border-radius: 10px;
  padding: 20px;
`
export const PopUpText = styled.p``

export const CloseButtonPopUp = styled.button`
  border: 1px solid #ddd;
  background-color: transparent;
  border-radius: 5px;

  padding: 10px;
  cursor: pointer;
`
export const RetryButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
`
