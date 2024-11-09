import React from 'react';
import './Desk.css';

const Desk = ({ desk, onClick }) => {
  return (
    <div
      className={`desk ${desk.type} ${desk.isBooked ? 'booked' : ''}`}
      onClick={onClick}
    >
      <p>{desk.type === 'individual' ? 'Individual' : 'Team'} Desk</p>
      <p>Desk ID: {desk.deskID}</p>
      {desk.isBooked && <p>Booked</p>}
    </div>
  );
};

export default Desk;
