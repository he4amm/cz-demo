import React, { Component } from 'react';
import './styles.scss';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        <div className="Notes__card">
          <span className="Notes__card--head">Notes</span>
          <span className="Notes__card--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis 
            sit amet sem eget gravida. Duis tellus est, pharetra ac bibendum eu, consequat sed dolor. 
            Duis mollis, augue a dignissim congue, mi felis interdum sapien, nec pellentesque eros 
            erat sed diam. Sed pharetra lobortis interdum. 
          </span>
        </div>
      </div>
    );
  }
}

export default Notes;
