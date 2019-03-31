import React, { Component } from 'react';
import AddressCardImg from '../../assets/imgs/house.svg';
import './styles.scss';

class AddressCard extends Component {
  render() {
    return (
      <div className="AddressCard">
        <img src={AddressCardImg} className="AddressCard__img" alt=""/>

        <div className="AddressCard__details">
          <span className="AddressCard__details--item">3309 Franecki Dam Apt. 701</span>
          <span className="AddressCard__details--item">London - United Kingdom</span>
          <button className="AddressCard__details--btn">Change</button>
        </div>
      </div>
    );
  }
}

export default AddressCard;
