import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import styles from './index.scss';
import React from 'react';
import Dimensions from 'react-dimensions'
import classNames from 'classNames';

import Menu from "./components/menu";
import ChatWrapper from "./components/chat";


class Main extends React.Component {
  render() {
    return (
      <div className="slds-grid slds-grid--frame">
        <Menu/>
        <ChatWrapper {...this.props}/>
      </div>
    );
  }
}

export default Dimensions()(Main);
