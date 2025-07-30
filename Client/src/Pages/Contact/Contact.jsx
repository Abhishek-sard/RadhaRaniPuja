import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const whatsappNumber = ' 9764453517'; // Replace with your actual WhatsApp number (without +)
  const gmailAddress = 'sardarabhishek14@gmail.com'; // Replace with your Gmail address

  // WhatsApp link
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // Gmail link
  const handleEmail = () => {
    const subject = encodeURIComponent('Contact from website');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${gmailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <textarea
          className="w-full border border-gray-300 rounded p-3 mb-4"
          rows="5"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-center"
          >
            Send on WhatsApp
          </button>

          <button
            onClick={handleEmail}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-center"
          >
            Send to Gmail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
