import React from 'react'
import Desk from '../Desk/Desk';
import { useState } from 'react';
import './DeskGrid.css'

const DeskGrid = () => {
    // Set up an array to represent 15 desks
    const initialDesks = [
      ...Array(10).fill({ type: 'individual', isBooked: false }),
      ...Array(5).fill({ type: 'team', isBooked: false }),
    ];
  
    const [desks, setDesks] = useState(initialDesks);
  
    const toggleBooking = (index) => {
      setDesks((prevDesks) =>
        prevDesks.map((desk, i) =>
          i === index ? { ...desk, isBooked: !desk.isBooked } : desk
        )
      );
    };
  
    return (
      <div className="desk-grid">
        {desks.map((desk, index) => (
          <Desk
            key={index}
            type={desk.type}
            isBooked={desk.isBooked}
            onClick={() => toggleBooking(index)}
          />
        ))}
      </div>
    );
  };
  
  export default DeskGrid;

