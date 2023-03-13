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

export const PrimeImg = styled.img`
  width: 100px;
`
export const PrimeCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const SimplePara = styled.p``

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
  justify-content: space-around;
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
export const FailTextH = styled.h1`
  color: ${props => (props.isDark ? '#FFF' : '#000')};
`
