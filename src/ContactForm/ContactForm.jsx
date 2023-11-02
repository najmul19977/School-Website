import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., sending data to a server).
    console.log('Form Data:', formData);
  };

  return (
    <div  className='bg-slate-300 p-10'>
      <h2 className='text-3xl font-semibold font-serif mt-10 mb-10'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First Name : </label>
          <input className="input w-full max-w-xs mb-4"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Last Name : </label>
          <input className="input w-full max-w-xs mb-4"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">P. Number : </label>
          <input className="input w-full max-w-xs mb-4"
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email Add. : </label>
          <input className="input w-full max-w-xs mb-4"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message : </label>
          <textarea className="textarea textarea-bordered textarea-md w-full max-w-xs "
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <button type="submit" className='btn btn-primary mt-4 mb-10'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
