import React, { Component } from 'react';
import './styles.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  activeTab = ( tabID ) => {
    this.setState({
      activeTab: tabID
    });
  }

  render() {
    const { content } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="Tabs">
        <div className="Tabs__head">
          { content.map((item, index) => 
            <span 
              key={index}
              className={`Tabs__head--title ${activeTab === index ? 'active' : ''}`} 
              onClick={() => this.activeTab(index)}
            >{item.title}</span>
          )}
        </div>

        <div className="Tabs__content">
          { content.map((item, index) => 
            <div className={`Tabs__content--container ${activeTab === index ? 'active' : ''}`} key={index}>
              {item.content}
            </div>
          )}
          
        </div>
      </div>
    );
  }
}

export default Tabs;
