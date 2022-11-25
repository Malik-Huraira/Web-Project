import React, { useState } from 'react'
import Card from './Card';

export default function LeftBar() {
    const [cardDetails, setCardDetails] = useState([
        {
            id: '1',
            heading: 'Quick Links',
            subItem:[
                {cardText:'T20 timeout'},
                {cardText:'T20 Time Out'},
                {cardText:'Fantasy pick'},
                {cardText:'ICC Ranking'}
            ]
        },
        {
            id: '2',
            heading: 'ESPN cricinfo App',
            subItem:[
                {cardText:'Android App'},
                {cardText:'ios App'}
            ]
        },
        {
            id: '3',
            heading: ' Follow ESPN cricinfo',
            subItem:[
                {cardText:'Facebook'},
                {cardText:'Instagram'},
                {cardText:'Youtube'},
                {cardText:'Twitter'}
            ]
        },
        {
            id: '4',
            heading: 'ESPN Sites',
            subItem:[
                {cardText:'ESPN'},
                {cardText:'The Cricket Monthly'}
            ]
        },

    ]);

  return (
    <div className='left-sidebar'>
      < Card card={cardDetails}/>
    </div>
  )
}
