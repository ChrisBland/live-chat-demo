"use strict";
import React from 'react';
var ReactDom = require('react-dom');
import { connect } from 'react-redux'
import styles from '../index.scss';
import {addMessage} from "../actions";
import { bindActionCreators } from 'redux'

import Socket from "../socket";

class ChatInput extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(){
    var text = this.refs.textInput;
    var val = text.value;
    console.log(val);
    var msg = {
      user_id: this.props.currentUser.user_id,
      message: val,
      type: 'text'
    }
    Socket.newMessage(msg);
  }
  render(){
    return (
      <div className={styles.chatinput}>
        <div className="slds-col">
          <div className="slds-media slds-comment slds-hint-parent">
            <div className="slds-media__figure">
              <div className="slds-grid">
                <a className="slds-avatar slds-avatar--circle slds-avatar--medium" href="javascript:void(0);" title="Jenna Davis">
                  <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
                </a>
              </div>
              <div className="slds-grid">
                <a className="slds-avatar slds-avatar--circle slds-avatar--medium" href="javascript:void(0);" title="Jenna Davis">
                  <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
                </a>
              </div>
              <div className="slds-grid">
                <a className="slds-avatar slds-avatar--circle slds-avatar--medium" href="javascript:void(0);" title="Jenna Davis">
                  <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
                </a>
              </div>
            </div>
            <div className="slds-media__body">
              <div className="slds-publisher slds-publisher--comment slds-is-active slds-has-focus">
                <label htmlFor="comment-text-input-01" className="slds-assistive-text">Write a comment</label>
                <textarea ref="textInput" id="comment-text-input-01" className="slds-publisher__input slds-input--bare slds-text-longform" placeholder="Write a comment…" defaultValue={""} />
                <div className="slds-publisher__actions slds-grid slds-grid--align-spread">
                  <ul className="slds-grid">
                    <li>
                      <button className="slds-button slds-button--icon-container">
                        <span className="slds-assistive-text">Add User</span>
                      </button>
                    </li>
                    <li>
                      <button className="slds-button slds-button--icon-container">
                        <span className="slds-assistive-text">Attach a file</span>
                      </button>
                    </li>
                  </ul>
                  <a className="slds-button slds-button--brand" onClick={this.submit}>Comment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: bindActionCreators(addMessage, dispatch),
  }
}


const Input = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInput)

export default Input;