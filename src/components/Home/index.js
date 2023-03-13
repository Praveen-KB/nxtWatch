import {Component} from 'react'
import Cookies from 'js-cookie'
import {GrFormClose, GrFormSearch} from 'react-icons/gr'
import Loader from 'react-loader-spinner'
import {
  MainContBody,
  MainCont,
  BodyCont,
  SideBarCont,
  LoaderCont,
  PrimeImg,
  SimplePara,
  PrimeCont,
  BannerButton,
  CloseBtn,
  SearchCont,
  SearchInput,
  SearchButton,
  SearchAndItemsCont,
  UnorderListForV,
  SearchFailCont,
  SearchFailImg,
  FailText,
  RetryButton,
  FailTextH,
} from './styledComponent'

import NxtWatchContext from '../context/NxtWatchContext'
import VideoCardItem from '../VideoCardItem'
import SideBar from '../SideBar'
import Header from '../Header'

const loadState = {load: 'LOADER', success: 'SUCCESS', fail: 'FAIL'}

class Home extends Component {
  state = {
    videosList: [],
    loader: loadState.load,
    searchInput: '',

    bannerStatus: true,
    searchValue: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  closeBanner = () => this.setState({bannerStatus: false})

  renderPrimeComponent = () => (
    <PrimeCont data-testid="banner">
      <CloseBtn type="button" onClick={this.closeBanner} data-testid="close">
        <GrFormClose />
      </CloseBtn>
      <PrimeImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />

      <SimplePara>Buy Nxt Watch Premium prepaid plans with UPI</SimplePara>
      <BannerButton type="button">GET IT NOW</BannerButton>
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
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  changeSValue = event => {
    const val = event.target.value
    this.setState({searchValue: val})
  }

  searchAgain = event => {
    event.preventDefault()
    this.setState(prev => {
      const search = prev.searchValue
      return {searchInput: search}
    }, this.getVideosList)
  }

  renderSearchFail = isDark => (
    <SearchFailCont>
      <SearchFailImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailTextH isDark={isDark}>No Search results found</FailTextH>
      <FailText isDark={isDark}>
        Try different key words or remove search filter
      </FailText>
      <RetryButton type="button">Retry</RetryButton>
    </SearchFailCont>
  )

  renderSearchBar = isDark => {
    const {searchValue} = this.state

    return (
      <SearchCont onSubmit={this.searchAgain}>
        <SearchInput
          type="search"
          value={searchValue}
          onChange={this.changeSValue}
          placeholder="Search"
          isDark={isDark}
        />
        <SearchButton type="submit" data-testid="searchButton">
          <GrFormSearch />
        </SearchButton>
      </SearchCont>
    )
  }

  renderSuccess = isDark => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length === 0 ? (
          this.renderSearchFail(isDark)
        ) : (
          <UnorderListForV>
            {videosList.map(each => (
              <VideoCardItem key={each.id} dummy={each} />
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
          const {bannerStatus} = this.state
          return (
            <MainCont>
              <Header />
              <MainContBody>
                <SideBarCont isDark={isDark}>
                  <SideBar />
                </SideBarCont>
                <BodyCont>
                  <SearchAndItemsCont isDark={isDark}>
                    {bannerStatus && this.renderPrimeComponent()}
                    {this.renderSearchBar(isDark)}
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

export default Home
