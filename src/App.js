import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './components/context/NxtWatchContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import GamingRoute from './components/GamilngRoute'
import VideoDetailsComponent from './components/VideoDetailsComponent'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import SavedVideosComponent from './components/SavedVideosComponent'

import './App.css'

class App extends Component {
  state = {
    sideBarView: 'none',
    darkMode: false,
    savedList: [],
  }

  changeSideBarView = () => {
    const {sideBarView} = this.state
    const sideBar = sideBarView === 'flex' ? 'none' : 'flex'
    this.setState({sideBarView: sideBar})
  }

  changeDarkMode = () => {
    this.setState(prev => {
      const darkmodeNow = !prev.darkMode

      return {
        darkMode: darkmodeNow,
      }
    })
  }

  addVideo = list => {
    this.setState(prevState => {
      const newL = [...prevState.savedList, list]
      return {
        savedList: newL,
      }
    })
  }

  deleteVideo = list =>
    this.setState(prevState => {
      const newList = prevState.savedList.map(each => each.id !== list.id)

      return {savedList: newList}
    })

  render() {
    const {sideBarView, darkMode, savedList} = this.state
    return (
      //   <BrowserRouter>
      <NxtWatchContext.Provider
        value={{
          isDark: darkMode,
          sideBarView,
          savedList,
          addVideo: this.addVideo,
          deleteVideo: this.deleteVideo,
          changeTheme: this.changeDarkMode,
          changeSideBarView: this.changeSideBarView,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsComponent}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosComponent}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
      //   </BrowserRouter>
    )
  }
}

export default App
