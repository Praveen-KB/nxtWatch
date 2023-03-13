import styled from 'styled-components'

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
