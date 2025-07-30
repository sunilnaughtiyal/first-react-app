import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll contact you soon.`);
  };

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff3cd', borderRadius: '8px', marginTop: '2rem' }}>
      <h2>📬 Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" rows="4" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>Send</button>
      </form>
    </section>
  );
}

export default Contact;
