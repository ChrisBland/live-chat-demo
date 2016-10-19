"use strict";
import React from 'react';
import { connect } from 'react-redux'
import MessageContainer from "./message";
import Input from "./input";
import styles from '../index.scss';
import classNames from 'classNames';

import ReactDom from 'react-dom';
import Infinite from 'react-infinite';

export default class ChatWrapper extends React.Component {
  render(){
    var cn = classNames(styles.chatwrapper, 'slds-grid--vertical', 'slds-grid');
    return (
      <div className="slds-col">
        <div className={cn}>
          <div className="slds-col slds-size--5-of-6">
            <Chat {...this.props}/>
          </div>
          <div className="slds-col slds-size--1-of-6">
            <Input/>
          </div>
        </div>
      </div>
    );
  }
}

class ChatApp extends React.Component {
  constructor(props){
    super(props);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  scrollToBottom(){
    if (this.shouldScrollBottom) {
      var node = ReactDom.findDOMNode(this);
      node.scrollTop = node.scrollHeight - 130;
    }
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  componentWillUpdate() {
    var node = ReactDom.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight >= node.scrollHeight;
  }
  render() {
    var messages = this.props.messages.map(function(msg){
      return <MessageContainer key={msg.id} {...msg}/>
    });
    return (
      <div style={{overflow: 'scroll'}}>
        <a onClick={this.scrollToBottom}>bottom</a>
        {messages}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  var msgs;
  function findUser(user_id){
    return state.users.find(function(user){
      return user.id == user_id;
    });
  }

  if(state.settings.onlyStaff == true){
    msgs = state.messages.filter(function(m){
      var found = false;
      var u = findUser(m.user_id);
      if(!u){
        return false;
      }else{
        if(u.isStaff == true){
          return true;
        }
      }
      return found;
    });
  }else{
    if(state.messages.length < 50){
      msgs = state.messages;
    }else{
      msgs = state.messages.slice(Math.max(state.messages.length - 50, 1))
    }
  }
  
  var messages = msgs.sort(function(a,b){
    if(a.create_date > b.create_date) return 1;
    if(a.create_date < b.create_date) return -1;
  });

  return {
    messages: messages
  };
}

const Chat = connect(
  mapStateToProps
)(ChatApp)


