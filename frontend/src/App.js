import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import InputBox from './components/InputBox';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';

function App() {
  const [messages, setMessages] = useState([]);

  const [users] = useState([
    { name: 'Shibi Patel', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoImpG6ePmcPlFPMSikVNlsop4yB-CKoW1SQ&s' },
    { name: 'Siya Rajput', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtsWfy6DN_Dx_R8KwZQvbfWrSJ4cdVI7_Pg&s' },
    { name: 'Swati', avatar: 'https://marketplace.canva.com/EAFltPVX5QA/1/0/1600w/canva-cute-cartoon-anime-girl-avatar-ZHBl2NicxII.jpg' },
    { name: 'Iksha', avatar: 'https://img.freepik.com/premium-vector/beauty-girl-avatar-character-simple-vector_855703-380.jpg' },
    { name: 'Nidhika', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNwk-m1axcMkCGnpkqk5aar9Rerhg-AppnpWQMAL1XwHTkeyRUm8klCJTz_mmTepxyog&usqp=CAU' },
    { name: 'Swetcha', avatar: 'https://as1.ftcdn.net/v2/jpg/03/04/13/04/1000_F_304130422_DJEMUwnUEYk42G3GglBsDbUmc3cnSTIW.jpg' },
    { name: 'Madhvvi ', avatar: 'https://as1.ftcdn.net/v2/jpg/03/04/13/04/1000_F_304130422_DJEMUwnUEYk42G3GglBsDbUmc3cnSTIW.jpg' },
   { name: 'Reema', avatar: 'data:image/jpeg;base64,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' },
    { name: 'mohit', avatar: 'https://as1.ftcdn.net/v2/jpg/03/04/13/04/1000_F_304130422_DJEMUwnUEYk42G3GglBsDbUmc3cnSTIW.jpg' },

  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSend = (input) => {
    if (!selectedUser) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    const botResponse = getBotResponse(input);
    setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
  };

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes('hello')) {
      return 'Hello! How can I help you today?';
    } else if (lowerCaseInput.includes('how are you')) {
      return 'I am a bot, but I am doing well. How about you?';
    } else if (lowerCaseInput.includes('where do you ')) {
      return 'Sorry, but I am not sharing my information.';
    } else {
      return 'Sorry, I did not understand that. Can you please rephrase?';
    }
  };

  return (
    <div className="app-container">
      <Sidebar users={users} onSelectUser={setSelectedUser} />
      <div className="chat-container">
        <Header selectedUser={selectedUser} />
        <ChatWindow messages={messages} />
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
