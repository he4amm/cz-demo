import React, { Component } from 'react';
import PersonalInfo from '../PersonalInfo';
import './styles.scss';

class PersonalCard extends Component {
  render() {
    return (
      <div className="PersonalCard">
        <span className="PersonalCard__head">
          Personal Card
        </span>
        <span className="PersonalCard__sub-head">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <PersonalInfo />
      </div>
    );
  }
}

export default PersonalCard;
