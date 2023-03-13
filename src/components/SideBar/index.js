import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'
import {GiFireBowl, GiGamepadCross} from 'react-icons/gi'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../context/NxtWatchContext'
import {
  SideBarSub,
  SideBarMain,
  UnorderedList,
  ListElements,
  ContactusText,
  ListButton,
  ListElementName,
  SocialMediaIconCont,
  SocialMediaIcon,
} from './styledComponent'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, sideBarView} = value

          const {history} = this.props

          return (
            <SideBarMain isDark={isDark} display={sideBarView}>
              <SideBarSub>
                <UnorderedList>
                  <Link
                    className={`linkStyle ${
                      history.location.pathname === '/' && 'active'
                    }`}
                    to="/"
                    value="home"
                    onClick={this.changeActive}
                  >
                    <ListElements>
                      <ListButton isDark={isDark}>
                        <HiHome />
                        <ListElementName>Home</ListElementName>
                      </ListButton>
                    </ListElements>
                  </Link>
                  <Link
                    className={`linkStyle ${
                      history.location.pathname === '/trending' && 'active'
                    }`}
                    to="/trending"
                    value="trending"
                    onClick={this.changeActive}
                  >
                    <ListElements>
                      <ListButton isDark={isDark}>
                        <GiFireBowl />
                        <ListElementName>Trending</ListElementName>
                      </ListButton>
                    </ListElements>
                  </Link>
                  <Link
                    className={`linkStyle ${
                      history.location.pathname === '/gaming' && 'active'
                    }`}
                    to="/gaming"
                    value="gaming"
                    onClick={this.changeActive}
                  >
                    <ListElements>
                      <ListButton isDark={isDark}>
                        <GiGamepadCross />
                        <ListElementName>Gaming</ListElementName>
                      </ListButton>
                    </ListElements>
                  </Link>
                  <Link
                    className={`linkStyle ${
                      history.location.pathname === '/saved-videos' && 'active'
                    }`}
                    to="/saved-videos"
                    value="savedVideo"
                    onClick={this.changeActive}
                  >
                    <ListElements>
                      <ListButton isDark={isDark}>
                        <BiListPlus />
                        <ListElementName>Saved Videos</ListElementName>
                      </ListButton>
                    </ListElements>
                  </Link>
                </UnorderedList>
              </SideBarSub>
              <SideBarSub isDark={isDark}>
                <ContactusText>Contact Us</ContactusText>
                <SocialMediaIconCont>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconCont>
                <ContactusText>
                  Enjoy! Now to see your channels and recommendations!
                </ContactusText>
              </SideBarSub>
            </SideBarMain>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
