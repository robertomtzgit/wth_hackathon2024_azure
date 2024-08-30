import React from 'react';

const Hours = () => {
  // Define the days of the week and hours
  const hours = {
    weekdays: '10:00 AM - 4:00 PM',
    weekend: '9:00 AM - 8:00 PM'
  };

  // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const today = new Date().getDay();
  const isWeekend = (today === 0 || today === 6); // Check if it's Saturday or Sunday

  return (
    <div>
      <h2>Hours Today:</h2>
      <p>{isWeekend ? hours.weekend : hours.weekdays}</p>
    </div>
  );
};

export default Hours;
