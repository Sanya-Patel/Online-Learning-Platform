import React, { useState } from 'react';

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Thank you for contacting us. We will get back to you soon!');
        form.reset(); // Reset the form to clear the fields
      } else {
        setStatusMessage('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      setStatusMessage('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="access_key"
          value="39be33e8-241e-4d12-91af-0058b90fb053"
        />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default ContactForm;
