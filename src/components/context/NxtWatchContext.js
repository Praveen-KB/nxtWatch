import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: true,
  savedList: [],
  addVideo: () => {},
  deleteVideo: () => {},
  changeTheme: () => {},
  changeSideBarView: () => {},
})

export default NxtWatchContext
