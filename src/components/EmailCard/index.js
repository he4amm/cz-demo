import React, { Component } from 'react';
import './styles.scss';

class EmailCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  onChangeValue = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div className={`EmailCard ${email ? 'active' : ''}`}>
        <input 
          type="text"
          value={email}
          placeholder="Email address"
          className="EmailCard__text"
          onChange={this.onChangeValue}
        />
        <button className="EmailCard__btn">Subscribe</button>
      </div>
    );
  }
}

export default EmailCard;
