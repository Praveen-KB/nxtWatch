import styled from 'styled-components'

export const SideBarMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 17vw;
  height: 90vh;
  background-color: ${props => (props.isDark ? '#181818' : 'transparent')};
  position: sticky;
  color: ${props => (props.isDark ? '#fff' : '#181818')};
  border: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media screen and (max-width: 768px) {
    display: ${props => props.display};
  }
`

export const SideBarSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 30vh;
  //   margin-left: 5px;
`
export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`

export const ListElements = styled.li`
  background-color: transparent;
  margin: 0 0;
  padding: 0;
`

export const ListButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  color: ${props => (!props.isDark ? '#181818' : '#fff')};
  cursor: pointer;
`

export const ListElementName = styled.p`
  margin-left: 10px;
`

export const SocialMediaIconCont = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SocialMediaIcon = styled.img`
  width: 25px;
  margin: 0 5px;
`

export const ContactusText = styled.p`
  font-size: 15px;
  margin: 5px;
`
