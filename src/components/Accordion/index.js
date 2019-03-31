import React, { Component } from 'react';
import AccordionPlusImg from '../../assets/imgs/accordion_plus.svg';
import AccordionMinusImg from '../../assets/imgs/accordion_minus.svg';
import './styles.scss';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardActive: -1
    };
  }

  activeCard = ( cardID ) => {
    const { cardActive } = this.state;

    this.setState({
      cardActive: cardActive === cardID ? -1 : cardID
    });
  }

  render() {
    const { cards } = this.props;
    const { cardActive } = this.state;

    return (
      <div className="Accordion">
        { cards.map((card, index) => 
          <div className={`Accordion__card ${cardActive === index ? 'active' : ''}`} key={index}>
            <div className="Accordion__card--head" 
              onClick={ () => this.activeCard(index) }
              >
              <img src={ cardActive === index ? AccordionMinusImg : AccordionPlusImg} alt=""/>
              <span>{card.name}</span>
            </div>

            <div className="Accordion__card--content">
              {card.content}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Accordion;
