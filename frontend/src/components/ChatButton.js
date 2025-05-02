import React from 'react';
import './ChatButton.css';

function ChatButton() {
  const whatsappLink = "https://wa.me/919451293261?text=Hello%20Dhanlakshmi%20Investments%20Team,%20I%20am%20interested%20in%20your%20services.";

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="chat-button">
      Chat with us
    </a>
  );
}

export default ChatButton;
