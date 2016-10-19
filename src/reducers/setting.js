/*
  Init state for settings: 
    Show Images: Bool -> should we render images in Rich Messages?
    Only Staff: Bool -> Should we only render staff / mod messages or allow all
*/
const settings = (state = {showImages: true, onlyStaff: true}, action) => {
  switch (action.type) {
    case 'SETTINGS:UPDATE':
      var setting = {};
      setting[action.settingName] = action.settingValue;
      return Object.assign({}, state, setting);
    default:
      return state
  }
}

module.exports = settings;
