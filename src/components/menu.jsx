"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserTile from "./usertile";
import styles from '../index.scss';
import UserMenu from './usermenu';
import Settings from './settings';
import {selectTab} from "../actions";
import classNames from 'classNames';

class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    if(this.props.handleClick){
      this.props.handleClick(this.props.tabName);
    }
  }
  render() {
    return (
       <li className="slds-tabs--default__item slds-text-title--caps" title="Item Two" role="presentation" onClick={this.handleClick}>
        <a className="slds-tabs--default__link" role="tab" aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">{this.props.tabLabel}</a>
      </li>
    );
  }
}

class AppMenu extends React.Component {
  render() {
    var cn = classNames('slds-size--1-of-6', 'slds-theme--shade');
    var content;
    if(this.props.menu.selectedTab == 'users'){
      content = <UserMenu/>
    }else{
      content = <Settings/>;
    }
    console.log(this.props.menu);
    return (
      <div className={cn} >
        <div className="slds-grid">
          <div className="slds-col ">
            <div className="slds-tabs--default">
              <ul className="slds-tabs--default__nav" role="tablist">
                <MenuItem tabLabel={"Users"} tabName={"users"} handleClick={this.props.selectTab}/>
                <MenuItem tabLabel={"Settings"} tabName={"settings"} handleClick={this.props.selectTab}/>
              </ul>
            </div>
          </div>
        </div>
        {content}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectTab: bindActionCreators(selectTab, dispatch),
  }
}


function mapStateToProps(state, ownProps) {
  return {
    menu: state.menu
  };
}

const Menu = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMenu)

export default Menu;