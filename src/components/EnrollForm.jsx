import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const EnrollForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: title || '' // Set course to title prop by default
  });

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Update course name if title prop changes
    setFormData((prevData) => ({
      ...prevData,
      course: title || ''
    }));
  }, [title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Trigger confetti effect
    try {
      confetti({
        particleCount: 600, // Number of particles
        spread: 180,        // Spread in degrees
        // origin: { x: 0.5, y: 0.5 }, // Center of the page
        // colors: ['#ff0000', '#00ff00', '#0000ff'], // Optional: array of colors
        scalar: 1         // Adjust size of particles
      });
    } catch (error) {
      console.error('Confetti error:', error);
    }
    
    // Set the success message
    setStatusMessage('You have enrolled successfully!');
    
    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      course: title || '' // Reset course name to title after submission
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Enroll</button>
      </form>

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default EnrollForm;
