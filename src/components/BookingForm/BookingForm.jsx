import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ desk, onClose, onBook }) => {
  const [membership, setMembership] = useState('Basic');
  const [hours, setHours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(desk.deskID, membership, hours); // Update desk status and close form
  };

  return (
    <div className="booking-form-overlay">
      <div className="booking-form">
        <h3>Book {desk.type === 'individual' ? 'Individual' : 'Team'} Desk</h3>
        <p>Desk ID: {desk.deskID}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Membership Tier:
            <select value={membership} onChange={(e) => setMembership(e.target.value)}>
              <option value="Basic">Basic - $10/hr</option>
              <option value="Premium">Premium - $15/hr</option>
              <option value="Executive">Executive - $20/hr</option>
            </select>
          </label>
          <label>
            Booking Duration (hours):
            <input
              type="number"
              min="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
          </label>
          <div className="booking-form-actions">
            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
