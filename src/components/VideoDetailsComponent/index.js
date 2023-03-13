import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import {
  MainContBody,
  MainCont,
  BodyCont,
  SideBarCont,
  LoaderCont,
  SimplePara,
  PrimeCont,
  SearchAndItemsCont,
  SearchFailCont,
  SearchFailImg,
  FailText,
  RetryButton,
  Likebutton,
  LikePara,
  ListDescriptionCont,
  ChannelImg,
  OtherDetailsCOnt,
  OtherDetails,
  FailTextH,
} from './styledComponent'

import NxtWatchContext from '../context/NxtWatchContext'
import SideBar from '../SideBar'
import Header from '../Header'

const loadState = {load: 'LOADER', success: 'SUCCESS', fail: 'FAIL'}

class VideoDetailsComponent extends Component {
  state = {
    videosList: {},
    loader: loadState.load,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  changeVideosKey = list => ({
    id: list.id,
    title: list.title,
    thumbnailUrl: list.thumbnail_url,
    channel: list.channel,
    viewCount: list.view_count,
    publishedAt: list.published_at,
    videoUrl: list.video_url,
    description: list.description,
  })

  getVideosList = async () => {
    this.setState({loader: loadState.load})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = this.changeVideosKey(data.video_details)

      this.setState({loader: loadState.success, videosList: updatedData})
    } else {
      this.setState({loader: loadState.fail})
    }
  }

  renderLoader = () => (
    <LoaderCont data-testid="loader">
      <Loader
        type="Rings"
        height="80"
        width="80"
        color="blue"
        radius={6}
        wrapperStyle={{}}
        wrapperClass=""
        ariaLabel="rings-loading"
      />
    </LoaderCont>
  )

  renderSearchFail = isDark => (
    <SearchFailCont>
      <SearchFailImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailText isDark={isDark}>No Search Result</FailText>
      <FailText isDark={isDark}>Try Different filter or Search Result</FailText>
      <RetryButton type="button">Retry</RetryButton>
    </SearchFailCont>
  )

  liked = () =>
    this.setState(p => {
      const isLike = p.isLiked
      if (isLike) {
        return {isLiked: false, isDisLiked: false}
      }
      return {isLiked: true, isDisLiked: false}
    })

  disliked = () =>
    this.setState(p => {
      const isLike = p.isDisLiked
      if (isLike) {
        return {isLiked: false, isDisLiked: false}
      }
      return {isLiked: false, isDisLiked: true}
    })

  renderSuccess = (isDark, isSaved, addVideoTolist) => {
    const {videosList, isLiked, isDisLiked} = this.state
    const date = new Date(videosList.publishedAt)
    const year = date.getFullYear()
    const thisYear = new Date().getFullYear()
    const publishedBefore = thisYear - year
    return (
      <PrimeCont>
        <ReactPlayer url={videosList.videoUrl} />
        <MainCont>
          <SimplePara isDark={isDark}>{videosList.title}</SimplePara>
          <MainContBody>
            <MainContBody>
              <FailText
                isDark={isDark}
              >{`${videosList.viewCount} Views`}</FailText>
              <FailText
                isDark={isDark}
              >{`${publishedBefore} years ago`}</FailText>
            </MainContBody>
            <MainContBody>
              <Likebutton type="button" onClick={this.liked} isLiked={isLiked}>
                <BiLike /> <LikePara>Like</LikePara>
              </Likebutton>
              <Likebutton
                type="button"
                onClick={this.disliked}
                isLiked={isDisLiked}
              >
                <BiDislike /> <LikePara>Dislike</LikePara>
              </Likebutton>
              <Likebutton
                type="button"
                onClick={addVideoTolist}
                isLiked={!isSaved}
              >
                <BiListPlus /> <LikePara>{isSaved ? 'Save' : 'saved'}</LikePara>
              </Likebutton>
            </MainContBody>
          </MainContBody>
          <hr />
          <ListDescriptionCont>
            <ChannelImg
              src={videosList.channel.profile_image_url}
              alt="channel logo"
            />
            <OtherDetailsCOnt>
              <OtherDetails>{videosList.channel.name}</OtherDetails>
              <OtherDetails>{`${videosList.channel.subscriber_count} Subscribers`}</OtherDetails>
              <FailText isDark={isDark}>{videosList.description}</FailText>
            </OtherDetailsCOnt>
          </ListDescriptionCont>
        </MainCont>
      </PrimeCont>
    )
  }

  retryClick = () => this.getVideosList()

  renderFail = isDark => (
    <SearchFailCont>
      <SearchFailImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailTextH isDark={isDark}>Oops! Something Went Wrong</FailTextH>
      <FailText isDark={isDark}>We are having some trouble</FailText>
      <RetryButton onClick={this.retryClick} type="button">
        Retry
      </RetryButton>
    </SearchFailCont>
  )

  renderFinal = (isDark, isSaved, addVideoTolist) => {
    const {loader} = this.state
    switch (loader) {
      case loadState.load:
        return this.renderLoader()
      case loadState.fail:
        return this.renderFail(isDark)
      case loadState.success:
        return this.renderSuccess(isDark, isSaved, addVideoTolist)

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedList, addVideo, deleteVideo} = value
          const {videosList} = this.state

          const findlist = savedList.filter(each => each.id === videosList.id)
          const isSaved = findlist.length === 0

          const addVideoTolist = () => {
            if (isSaved) {
              addVideo(videosList)
            } else {
              deleteVideo(videosList)
            }
          }

          return (
            <MainCont>
              <Header />
              <MainContBody>
                <SideBarCont isDark={isDark}>
                  <SideBar />
                </SideBarCont>
                <BodyCont>
                  <SearchAndItemsCont isDark={isDark}>
                    {this.renderFinal(isDark, isSaved, addVideoTolist)}
                  </SearchAndItemsCont>
                </BodyCont>
              </MainContBody>
            </MainCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetailsComponent
