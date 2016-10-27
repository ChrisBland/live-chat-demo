"use strict";
import React from 'react';
import { connect } from 'react-redux'
import UserTile from "./usertile";
import styles from '../index.scss';

class AppMenu extends React.Component {
  render() {
    var tiles = this.props.users.map(function(u){
      return <UserTile key={u.userName} user={u}/>
    });
    return (
      <div className="slds-col" style={{
        overflow: 'scroll',
        maxHeight: window.innerHeight+'px',
        marginTop: '15px'
      }}>
        <div className="slds-grid slds-scrollable">
          <div className="slds-col--padded" >
            {tiles}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
	var users = state.users.sort(function(a,b){
    if(a.userName > b.userName) return 1;
    if(a.userName < b.userName) return -1;
    return 0;
  });
  return {
    users: users
  };
}

const Menu = connect(
  mapStateToProps
)(AppMenu)

export default Menu;
