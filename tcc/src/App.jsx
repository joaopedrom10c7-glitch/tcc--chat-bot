import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link,Routes,Route} from 'react-router-dom'
import ChatWindow from './componentes/ChatWindow'
import InputArea from './componentes/Inputarea'
import Message from './componentes/Message'
import QuickMensage from './componentes/QuickMensage'

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Como posso ajudar você hoje?', sender: 'bot' }
  ]);

  const handleSendMessage = (text) => {
    if (text.trim()) {
      const newMessage = { 
        id: Date.now(), 
        text, 
        sender: 'user' 
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      setTimeout(() => {
        const botResponse = getBotResponse(text);
        const botMessage = { 
          id: Date.now() + 1, 
          text: botResponse, 
          sender: 'bot' 
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  const handleQuickQuestion = (question) => {
    handleSendMessage(question);
  };

  const getBotResponse = (question) => {
    const responses = {
      "Qual o saldo da minha conta?": "Seu saldo atual é de R$ 5.432,10.\n\n[OPCOES_SALDO]",
      "Cartões": "Ou escolha uma das opções abaixo:\n\n[OPCOES_CARTAO]",
      "Esqueci minha senha, o que fazer?": "Vou te ajudar a recuperar sua senha.\n\n[OPCOES_SENHA]",
      "Falar com um atendente": "Como prefere falar com nosso atendente?\n\n[OPCOES_ATENDENTE]",
      
      // Respostas secundárias
      "Santander FREE": "O Santander FREE é um cartão sem anuidade com benefícios exclusivos.",
      "Renegociação": "Para renegociar sua dívida do cartão, podemos oferecer condições especiais.",
      "Conta corrente": "Sua conta corrente está ativa e funcionando normalmente.\n\n[OPCOES_CONTA]",
      "Empréstimos": "Temos diversas opções de empréstimo com taxas competitivas.\n\n[OPCOES_EMPRESTIMO]",
      "Select Global": "O Select Global oferece benefícios internacionais premium.",
      "Mais Opções": "Aqui estão mais opções disponíveis para você.",
      "Santander na música": "Confira os benefícios musicais do Santander!",
      "Fatura": "Sua fatura atual está disponível para consulta.",
      "Limites do cartão": "Seu limite disponível é de R$ 8.500,00.",
      "Contratar cartão": "Gostaria de contratar um novo cartão? Temos ótimas opções!",
      "Bloqueios do cartão": "Seu cartão não possui bloqueios ativos no momento.",
      "Cartão perdido/roubado": "Vou te ajudar a bloquear o cartão imediatamente.",
      "Menu inicial": "Voltando ao menu principal...",
      "default": "Desculpe, não entendi a pergunta. Poderia reformular?"
    };
    
    return responses[question] || responses["default"];
  };
            
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/messages">Histórico</Link> | {" "}
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <div className="app">
                <div className="chat-container">
                  <ChatWindow messages={messages} />
                  <QuickMensage onQuickQuestionClick={handleQuickQuestion} />
                  <InputArea onSendMessage={handleSendMessage} />
                </div>
              </div>
            } 
          />
          <Route 
            path="/chat" 
            element={
              <div className="app">
                <div className="chat-container">
                  <ChatWindow messages={messages} />
                  <QuickMensage onQuickQuestionClick={handleQuickQuestion} />
                  <InputArea onSendMessage={handleSendMessage} />
                </div>
              </div>
            } 
          />
          <Route 
            path="/messages" 
            element={
              <div>
                <h2>Exemplo de Mensagens</h2>
                {messages.map((msg) => (
                  <Message key={msg.id} message={msg} />
                ))}
              </div>
            } 
          />
          <Route 
            path="/input" 
            element={<InputArea onSendMessage={handleSendMessage} />} 
          />
          <Route 
            path="/quick" 
            element={<QuickMensage onQuickQuestionClick={handleQuickQuestion} />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;