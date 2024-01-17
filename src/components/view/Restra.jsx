import React, { useState } from 'react';
import './Restra.css'; // Import the CSS file


const Restra= () => {
  const [placename, setPlaceName] = useState('');
  const [thingsToSee, setThingsToSee] = useState('');
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState('');
  const [showHotel, setShowHotel] = useState(false);

  const handleNext = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // You can handle the form data here, e.g., send it to an API

    // For demonstration purposes, set showHotel to true to render the Hotel component
    setShowHotel(true);
  };

const re = () => {
 
}

  return (
    <div className='p'>
      <form onSubmit={handleNext} className='hi'>
        <label>
          Restaurant Name:
          <input
            type="text"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Description
          <textarea
            value={thingsToSee}
            onChange={(e) => setThingsToSee(e.target.value)}
          />
        </label>
        <br />

        <label>
          Photos:
          <input
            type="file"
            multiple
            onChange={(e) => setPhotos([...e.target.files])}
          />
        </label>
        <br />

        <label>
          Location from Google Maps:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">SUBMIT</button>
      </form>

    </div>
  );
};

export default Restra;
