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

class TrendingVideoCard extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {dummy} = this.props

          const date = new Date(dummy.publishedAt)
          const year = date.getFullYear()
          const thisYear = new Date().getFullYear()
          const publishedBefore = thisYear - year
          return (
            <Link style={{textDecoration: 'none'}} to={`/videos/${dummy.id}`}>
              <ListItem>
                <ListImg src={dummy.thumbnailUrl} alt="video thumbnail" />
                <ListDescriptionCont>
                  <OtherDetailsCOnt>
                    <VIdeoTitle isDark={isDark}>{dummy.title}</VIdeoTitle>
                    <OtherDetails>{dummy.channel.name}</OtherDetails>
                    <OtherDetails>{`${dummy.viewCount} views`}</OtherDetails>
                    <OtherDetails>{`${publishedBefore} years ago`}</OtherDetails>
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

export default TrendingVideoCard
