import React from 'react';
import './Desk.css';

const Desk = ({ type, isBooked, onClick }) => {
  return (
    <div
      className={`desk ${type} ${isBooked ? 'booked' : ''}`}
      onClick={onClick}
    >
      <p>{type === 'individual' ? 'Individual' : 'Team'} Desk</p>
      {isBooked && <p>Booked</p>}
    </div>
  );
};

export default Desk;
