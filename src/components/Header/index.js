import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {BsMoon, BsSun} from 'react-icons/bs'
import {FiMenu, FiLogOut} from 'react-icons/fi'
import NxtWatchContext from '../context/NxtWatchContext'
import {
  MainContHeader,
  ItemsCont,
  WebsiteLogo,
  ProfileImg,
  LogoutButton,
  ItemsContMobile,
  MenuButton,
  PopUp,
  PopUpText,
  CloseButtonPopUp,
  RetryButton,
} from './styledComponent'
import './index.css'

class Header extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, changeSideBarView, changeTheme} = value
          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          const overlayStyle = {background: 'rgba(0,0,0,0.5)'}

          const viewSide = () => {
            changeSideBarView()
          }

          return (
            <MainContHeader isDark={isDark}>
              <Link to="/">
                <WebsiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <ItemsCont>
                <MenuButton
                  data-testid="theme"
                  isDark={isDark}
                  onClick={changeTheme}
                >
                  {isDark ? (
                    <BsMoon className="menu" />
                  ) : (
                    <BsSun className="menu" />
                  )}
                </MenuButton>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  trigger={
                    <LogoutButton type="button" isDark={isDark}>
                      Logout
                    </LogoutButton>
                  }
                  modal
                  nested
                  overlayStyle={overlayStyle}
                >
                  {close => (
                    <PopUp isDark={isDark}>
                      <PopUpText>Are you sure, you want to logout</PopUpText>
                      <MainContHeader>
                        <CloseButtonPopUp onClick={() => close()}>
                          Cancel
                        </CloseButtonPopUp>
                        <RetryButton onClick={onClickLogout}>
                          Confirm
                        </RetryButton>
                      </MainContHeader>
                    </PopUp>
                  )}
                </Popup>
              </ItemsCont>
              <ItemsContMobile>
                <MenuButton isDark={isDark} onClick={changeTheme}>
                  {isDark ? (
                    <BsMoon className="menu" />
                  ) : (
                    <BsSun className="menu" />
                  )}
                </MenuButton>
                <MenuButton isDark={isDark} onClick={viewSide}>
                  <FiMenu className="menu" />
                </MenuButton>
                <MenuButton isDark={isDark} onClick={onClickLogout}>
                  <FiLogOut className="menu" />
                </MenuButton>
              </ItemsContMobile>
            </MainContHeader>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
