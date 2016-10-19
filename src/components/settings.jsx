"use strict";
import {updateSetting} from "../actions";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Setting extends React.Component{
  constructor(props){
    super(props);
    this.toggleShowStaff = this.toggleShowStaff.bind(this);
  }
  toggleShowStaff(){
    this.props.updateSetting('onlyStaff', !this.props.settings.onlyStaff);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>SEttings</p>
        <a onClick={this.toggleShowStaff}>Toggle Staff</a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSetting: bindActionCreators(updateSetting, dispatch),
  }
}


function mapStateToProps(state, ownProps) {
  return {
    settings: state.settings
  };
}

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting)


export default Settings;