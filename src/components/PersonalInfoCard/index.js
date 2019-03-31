import React, { Component } from 'react';
import PersonImg from '../../assets/imgs/oval.png';
import './styles.scss';

class PersonalInfoCard extends Component {
  render() {
    return (
      <div className="PersonalInfoCard">
        <img src={PersonImg} className="PersonalInfoCard__img" alt=""/>
        <div className="PersonalInfoCard__details">
          <span>25.10.1985</span>
          <span>diego.morata@domain.co.uk</span>
        </div>
      </div>
    );
  }
}

export default PersonalInfoCard;
