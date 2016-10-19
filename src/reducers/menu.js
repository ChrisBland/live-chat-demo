/*
  Menu Settings (Left hand gutter, what to show)
  Selected Tab: String => The tab we will show, either Users or Settigns
  Is Signed In: Bool => For future use to note if the user has already completed the Auth Flow
*/
const menu = (state = {selectedTab: 'users', isSignedIn: false}, action) => {
  switch (action.type) {
    case 'MENU:SELECT_TAB':
      return Object.assign({}, state, {selectedTab: action.tabName});
    default:
      return state
  }
}

module.exports = menu;
