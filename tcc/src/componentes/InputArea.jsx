import React, { useState } from 'react';

const InputArea = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default InputArea;