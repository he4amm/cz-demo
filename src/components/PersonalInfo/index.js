import React, { Component } from 'react';
import Accordion from '../Accordion';
import Tabs from '../Tabs';
import PersonalInfoCard from '../PersonalInfoCard';
import AddressCard from '../AddressCard';
import EmailCard from '../EmailCard';
import './styles.scss';

class PersonalInfo extends Component {
  render() {
    const accordionCards = [
      {
        name: 'Diego Morata',
        content: <PersonalInfoCard />
      }, 
      {
        name: 'Family',
        content: 'family card content'
      }
    ];

    const tabsContent = [
      {
        title: 'Address',
        content: <AddressCard />
      },
      {
        title: 'Subscribe',
        content: <EmailCard />
      }
    ];

    return (
      <div className="PersonalInfo">
        <span className="PersonalInfo__head">
          Personal Information
        </span>
        <Accordion 
          cards={accordionCards}
        />
        <Tabs 
          content = {tabsContent}
        />
      </div>
    );
  }
}

export default PersonalInfo;
