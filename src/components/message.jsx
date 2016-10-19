"use strict";
import React from 'react';
import { connect } from 'react-redux'
import UserTile from "./usertile";

class RichMessage extends React.Component {
  render() {
    var msg = this.props;
    return (
      <div className="slds-post " style={{padding: '.5rem'}}>
        <header className="slds-post__header slds-media slds-media--center">
          <div className="slds-media__figure">
            <a href="javascript:void(0);" title="Jason Rodgers" className="slds-avatar slds-avatar--circle slds-avatar--large">
              <img src={this.props.user.avatar} alt={this.props.user.userName} />
            </a>
          </div>
          <div className="slds-media__body">
            <div className="slds-grid slds-grid--align-spread slds-has-flexi-truncate">
              <p>{this.props.user.userName}</p> 
              <button className="slds-button slds-button--icon-border slds-button--icon-x-small" aria-haspopup="true">
                <svg aria-hidden="true" className="slds-button__icon">
                </svg>
                <span className="slds-assistive-text">More Options</span>
              </button>
            </div>
          </div>
        </header>
        <div className="slds-post__payload">
          <ul className="slds-grid slds-grid--pull-padded">
            <li className="slds-p-horizontal--small slds-size--1-of-2 slds-medium-size--1-of-3">
              <figure className="slds-image slds-image--card">
                <a href="javascript:void(0);" className="slds-image__crop slds-image__crop--16-by-9">
                  <img src={this.props.image} alt="Description of the image" />
                </a>
                <figcaption className="slds-image__title slds-image__title--card">
                  <span className="slds-icon_container slds-m-right--x-small" title="image">
                    <svg aria-hidden="true" className="slds-icon slds-icon--x-small">
                    </svg>
                    <span className="slds-assistive-text">image</span>
                  </span>
                  <span className="slds-image__text slds-truncate" title="Image Title">{this.props.body}</span>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


class Message extends React.Component {
  render() {
    var cn = "slds-grid";
    return (
      <div className="slds-p-around--medium">
        <div className={cn}>
          <div className="slds-text-align--left">
            <a href="javascript:void(0);" title="Jenna Davis" className="slds-avatar slds-avatar--circle slds-avatar--large">
              <img src={this.props.user.avatar} alt="Jenna Davis" />
            </a>
          </div>
          <div className="slds-col slds-m-left--medium">
            <div className="slds-grid">
              <div className="">
                 <p className="slds-truncate"><a href="javascript:void(0);" title={this.props.user.userName}>{this.props.user.userName}</a></p>
              </div>
            </div>
            <div className="slds-grid">
              <div className="slds-col">
                 <div className=" slds-text-longform">{this.props.body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MessageHelper extends React.Component {
  render(){
    if(this.props.type == 'text') return <Message {...this.props}/>;
    if(this.props.type == 'rich') return <RichMessage {...this.props}/>;
    return <Message {...props}/>;
  }
}

function mapStateToProps(state, ownProps) {
  var user = state.users.filter(function(u){
    return u.id === ownProps.user_id;
  });
  return {
    user: user[0]
  };
}

const MessageContainer = connect(
  mapStateToProps
)(MessageHelper)

export default MessageContainer;