import React from 'react';
import './Desk.css';
import space1 from '../../assets/images/individual space1.jpg'

const Desk = ({ desk, onClick }) => {
  return (
    <div
      className={`desk ${desk.type} ${desk.isBooked ? 'booked' : ''}`}
      onClick={onClick}
    >
      <p>{desk.type === 'individual' ? 'Individual' : 'Team'} Desk</p>
      <p>Desk ID: {desk.deskID}</p>
      {/* <img src={space1} alt="" /> */}
      {desk.isBooked && <p>Booked</p>}
    </div>
  );
};

export default Desk;
