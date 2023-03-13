import {Component} from 'react'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../context/NxtWatchContext'
import {
  ListItem,
  ListImg,
  ListDescriptionCont,
  VIdeoTitle,
  OtherDetails,
  OtherDetailsCOnt,
} from './styledComponent'

class GamingCardComponent extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {dummy} = this.props
          return (
            <Link style={{textDecoration: 'none'}} to={`/videos/${dummy.id}`}>
              <ListItem>
                <ListImg src={dummy.thumbnailUrl} alt="video thumbnail" />
                <ListDescriptionCont>
                  <OtherDetailsCOnt>
                    <VIdeoTitle isDark={isDark}>{dummy.title}</VIdeoTitle>
                    <OtherDetails>{`${dummy.viewCount} Watching World wide`}</OtherDetails>
                  </OtherDetailsCOnt>
                </ListDescriptionCont>
              </ListItem>
            </Link>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingCardComponent
