import React from 'react';
import '../styles/Card.css';
import { BiChevronRight } from 'react-icons/bi'
export default function Card({ card }) {
    return (
        <div className='card-main'>
            {
                card.map((ca) => (
                    <div className='card-container' key={ca.id}>
                        <span className='card-heading'>{ca.heading}</span>
                        <hr className='card-hr' />
                        <div>
                        {
                            ca.subItem.map((sub)=>(
                                <span className='card-text'><BiChevronRight />{sub.cardText}</span>
                            ))
                        }
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}
