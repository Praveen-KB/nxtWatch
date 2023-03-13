import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BiListPlus} from 'react-icons/bi'
import {
  MainContBody,
  MainCont,
  BodyCont,
  SideBarCont,
  LoaderCont,
  PrimeImg,
  SimplePara,
  PrimeCont,
  UnorderListForV,
  SearchFailCont,
  SearchFailImg,
  FailText,
  FailTextH,
} from './styledComponent'

import NxtWatchContext from '../context/NxtWatchContext'
import TrendingVideoCard from '../TrendingVideoCard'
import SideBar from '../SideBar'
import Header from '../Header'

const loadState = {load: 'LOADER', success: 'SUCCESS', fail: 'FAIL'}

class NotFound extends Component {
  state = {
    loader: loadState.success,
  }

  renderPrimeComponent = isDark => (
    <PrimeCont isDark={isDark}>
      <PrimeImg isDark={isDark}>
        <BiListPlus />
      </PrimeImg>

      <SimplePara>Saved Videos</SimplePara>
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
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="not found"
      />
      <FailTextH isDark={isDark}>Page Not Found</FailTextH>
      <FailText isDark={isDark}>
        we are sorry, the page you requested could not be found.
      </FailText>
    </SearchFailCont>
  )

  renderSuccess = (isDark, savedList) => (
    <>
      {savedList.length === 0 ? (
        this.renderSearchFail(isDark)
      ) : (
        <UnorderListForV>
          {savedList.map(each => (
            <TrendingVideoCard key={each.id} dummy={each} />
          ))}
        </UnorderListForV>
      )}
    </>
  )

  retryClick = () => this.getVideosList()

  renderFail = isDark => (
    <SearchFailCont>
      <SearchFailImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        }
        alt="Failed"
      />
      <FailText isDark={isDark}>We are sorry</FailText>
      <FailText isDark={isDark}>Page you Requested not to be Found</FailText>
    </SearchFailCont>
  )

  renderFinal = (isDark, savedList) => {
    const {loader} = this.state
    switch (loader) {
      case loadState.load:
        return this.renderLoader()
      case loadState.fail:
        return this.renderFail(isDark)
      case loadState.success:
        return this.renderSuccess(isDark, savedList)

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
                <BodyCont isDark={isDark}>{this.renderFail(isDark)}</BodyCont>
              </MainContBody>
            </MainCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NotFound
