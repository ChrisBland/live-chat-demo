"use strict";
import React from 'react';
import classNames from 'classNames';

export default class UserTile extends React.Component {
  render() {
    var cn = classNames({
      'slds-tile slds-media': true,
      'slds-box--x-small': true 
    });
    return (
      <div className={cn}>
        <div className="slds-media__figure">
          <span className="slds-avatar slds-avatar--circle slds-avatar--small">
            <img src={this.props.user.avatar} alt="Person&#x27;s name" />
          </span>
        </div>
        <div className="slds-media__body">
          <h3 className="slds-truncate" title={this.props.user.userName}>{this.props.user.userName}</h3>
        </div>
      </div>
    );
  }
}

