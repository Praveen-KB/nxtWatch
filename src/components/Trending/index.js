import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiFireBowl} from 'react-icons/gi'
import {
  MainContBody,
  MainCont,
  BodyCont,
  SideBarCont,
  LoaderCont,
  PrimeImg,
  SimplePara,
  PrimeCont,
  SearchAndItemsCont,
  UnorderListForV,
  SearchFailCont,
  SearchFailImg,
  FailText,
  FailTextH,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../context/NxtWatchContext'
import TrendingVideoCard from '../TrendingVideoCard'
import SideBar from '../SideBar'
import Header from '../Header'

const loadState = {load: 'LOADER', success: 'SUCCESS', fail: 'FAIL'}

class Trending extends Component {
  state = {
    videosList: [],
    loader: loadState.load,
  }

  componentDidMount() {
    this.getVideosList()
  }

  renderPrimeComponent = isDark => (
    <PrimeCont isDark={isDark}>
      <PrimeImg isDark={isDark}>
        <GiFireBowl />
      </PrimeImg>

      <SimplePara>Trending</SimplePara>
    </PrimeCont>
  )

  changeVideosKey = list => ({
    id: list.id,
    title: list.title,
    thumbnailUrl: list.thumbnail_url,
    channel: list.channel,
    viewCount: list.view_count,
    publishedAt: list.published_at,
  })

  getVideosList = async () => {
    this.setState({loader: loadState.load})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => this.changeVideosKey(each))
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

  renderSuccess = isDark => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length === 0 ? (
          this.renderSearchFail(isDark)
        ) : (
          <UnorderListForV>
            {videosList.map(each => (
              <TrendingVideoCard key={each.id} dummy={each} />
            ))}
          </UnorderListForV>
        )}
      </>
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

  renderFinal = isDark => {
    const {loader} = this.state
    switch (loader) {
      case loadState.load:
        return this.renderLoader()
      case loadState.fail:
        return this.renderFail(isDark)
      case loadState.success:
        return this.renderSuccess(isDark)

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <MainCont>
              <Header />
              <MainContBody>
                <SideBarCont isDark={isDark}>
                  <SideBar />
                </SideBarCont>
                <BodyCont>
                  {this.renderPrimeComponent(isDark)}
                  <SearchAndItemsCont isDark={isDark}>
                    {this.renderFinal(isDark)}
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

export default Trending
