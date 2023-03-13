import styled from 'styled-components'

export const MainContBody = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const BodyCont = styled.div`
  width: 100%;
`
export const FailTextH = styled.h1`
  color: ${props => (props.isDark ? '#FFF' : '#000')};
`
export const SideBarCont = styled.div`
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => (props.isDark ? '#000' : '#dddddd30')};
  position: sticky;
  height: 100vh;

  //   @media screen and (max-width: 768px) {
  //     display: ${props => props.display};
  //   }
`

export const LoaderCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  width: 80vw;
`

export const PrimeImg = styled.div`
  margin: 5px;
  font-size: 50px;
  border-radius: 50%;
  background-color: black;
  color: red;
  background-color: ${props => (props.isDark ? '#60606050' : '#cbd5e150')};
  padding: 15px;
`
export const PrimeCont = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  background-color: ${props => (props.isDark ? '#000' : '#dddddd30')};
  color: ${props => (props.isDark ? '#ddd' : '#181818')};
`

export const SimplePara = styled.p`
  margin: 0;
  color: ${props => (props.isDark ? '#ddd' : '#181818')};
  font-size: 20px;
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  align-self: flex-start;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 500;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`

export const SearchCont = styled.form`
  display: flex;
  justify-content: flex-start;
  padding: 15px;

  @media screen and (max-width: 990px) {
    justify-content: center;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  border: 1px solid #ddd;
  color: ${props => (props.isDark ? '#ddd' : '#181818')};
  border-radius: 5px 0 0 5px;
  padding: 3px 5px;
`

export const SearchButton = styled.button`
  background-color: #dddddd60;
  border: 1px solid #ddd;
  color: #ddd;
  border-radius: 0 5px 5px 0;
`
export const SearchAndItemsCont = styled.div`
  padding: 10px;
  background-color: ${props => (props.isDark ? '#000' : '#dddddd30')};
  color: ${props => (props.isDark ? '#000' : '#dddddd30')};
`

export const UnorderListForV = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`
export const SearchFailImg = styled.img`
  width: 50%;
`

export const SearchFailCont = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailText = styled.p`
  color: ${props => (props.isDark ? '#FFF' : '#000')};
`

export const RetryButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
`
export const Likebutton = styled.button`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const LikePara = styled.p``

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  margin: 5px;
  color: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
`

export const ListImg = styled.img`
  width: 250px;
`

export const ListDescriptionCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
`

export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  align-items: flex-start;
  margin-top: 0;
  margin-right: 10px;
`
export const VIdeoTitle = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  margin: 0;
`
export const OtherDetails = styled.p`
  color: #dddddd;
  margin: 0;
`

export const OtherDetailsCOnt = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 10px;
`
