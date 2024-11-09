import React, { useState } from 'react';
import Desk from '../Desk/Desk';
import BookingForm from '../BookingForm/BookingForm';
import './DeskGrid.css';

const DeskGrid = () => {
  // Initialize desks with deskID, type, and isBooked status
  const initialDesks = [
    ...Array(10).fill().map((_, i) => ({ deskID: i + 1, type: 'individual', isBooked: false })),
    ...Array(5).fill().map((_, i) => ({ deskID: i + 11, type: 'team', isBooked: false })),
  ];

  const [desks, setDesks] = useState(initialDesks);
  const [selectedDesk, setSelectedDesk] = useState(null);

  const handleDeskClick = (desk) => {
    if (!desk.isBooked) {
      setSelectedDesk(desk); // Open the booking form for the selected desk
    } else {
      alert("Desk is already booked.");
    }
  };

  const handleBooking = (deskID, membership, hours) => {
    // Update desk availability and close booking form
    setDesks((prevDesks) =>
      prevDesks.map((desk) =>
        desk.deskID === deskID ? { ...desk, isBooked: true } : desk
      )
    );
    setSelectedDesk(null); // Close the booking form
  };

  return (
    <div className="desk-grid">
      {desks.map((desk) => (
        <Desk
          key={desk.deskID}
          desk={desk}
          onClick={() => handleDeskClick(desk)}
        />
      ))}
      {selectedDesk && (
        <BookingForm
          desk={selectedDesk}
          onClose={() => setSelectedDesk(null)}
          onBook={handleBooking}
        />
      )}
    </div>
  );
};

export default DeskGrid;
