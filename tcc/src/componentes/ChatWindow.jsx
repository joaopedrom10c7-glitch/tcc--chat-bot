import React from 'react';
import Message from './Message';

const ChatWindow = ({ messages }) => {
  const renderMessage = (msg) => {
    // OPÇÕES DE CARTÃO
    if (msg.text.includes('[OPCOES_CARTAO]')) {
      const beforeText = msg.text.split('[OPCOES_CARTAO]')[0];
      return (
        <div key={msg.id} className="message-with-options">
          <div className={`message ${msg.sender}`}>
            {beforeText}
          </div>
          <div className="card-options">
            <button className="card-option">Santander FREE</button>
            <button className="card-option card-option-highlight">Cartões</button>
            <button className="card-option">Renegociação</button>
            <button className="card-option">Conta corrente</button>
            <button className="card-option">Empréstimos</button>
            <button className="card-option">Select Global</button>
            <button className="card-option">Mais Opções</button>
          </div>
          <div className="sub-message">
            <div className={`message ${msg.sender}`}>
              Entendi que você deseja falar sobre seu Cartão.
              <br /><br />
              Escolha uma das opções, ou digite sua dúvida. 😉
            </div>
          </div>
          <div className="card-sub-options">
            <button className="card-sub-option">Santander na música</button>
            <button className="card-sub-option">Fatura</button>
            <button className="card-sub-option">Limites do cartão</button>
            <button className="card-sub-option">Contratar cartão</button>
            <button className="card-sub-option">Bloqueios do cartão</button>
            <button className="card-sub-option">Cartão perdido/roubado</button>
            <button className="card-sub-option">Mais opções</button>
            <button className="card-sub-option">Menu inicial</button>
          </div>
        </div>
      );
    }
    
    // OPÇÕES DE SALDO
    if (msg.text.includes('[OPCOES_SALDO]')) {
      const beforeText = msg.text.split('[OPCOES_SALDO]')[0];
      return (
        <div key={msg.id} className="message-with-options">
          <div className={`message ${msg.sender}`}>
            {beforeText}
          </div>
          <div className="card-options">
            <button className="card-option card-option-highlight">Saldo</button>
            <button className="card-option">Extrato</button>
            <button className="card-option">Transferências</button>
            <button className="card-option">Investimentos</button>
            <button className="card-option">Pix</button>
            <button className="card-option">Pagamentos</button>
            <button className="card-option">Mais Opções</button>
          </div>
          <div className="sub-message">
            <div className={`message ${msg.sender}`}>
              O que você gostaria de fazer com sua conta?
              <br /><br />
              Escolha uma das opções abaixo. 💰
            </div>
          </div>
          <div className="card-sub-options">
            <button className="card-sub-option">Ver saldo detalhado</button>
            <button className="card-sub-option">Últimas movimentações</button>
            <button className="card-sub-option">Fazer transferência</button>
            <button className="card-sub-option">Consultar investimentos</button>
            <button className="card-sub-option">Realizar Pix</button>
            <button className="card-sub-option">Pagar contas</button>
            <button className="card-sub-option">Agendar pagamento</button>
            <button className="card-sub-option">Menu inicial</button>
          </div>
        </div>
      );
    }
    
    // OPÇÕES DE SENHA
    if (msg.text.includes('[OPCOES_SENHA]')) {
      const beforeText = msg.text.split('[OPCOES_SENHA]')[0];
      return (
        <div key={msg.id} className="message-with-options">
          <div className={`message ${msg.sender}`}>
            {beforeText}
          </div>
          <div className="card-options">
            <button className="card-option card-option-highlight">Recuperar senha</button>
            <button className="card-option">Alterar senha</button>
            <button className="card-option">Desbloquear conta</button>
            <button className="card-option">Código de segurança</button>
            <button className="card-option">Biometria</button>
            <button className="card-option">Mais Opções</button>
          </div>
          <div className="sub-message">
            <div className={`message ${msg.sender}`}>
              Vou te ajudar com a segurança da sua conta.
              <br /><br />
              Escolha o que precisa fazer. 🔐
            </div>
          </div>
          <div className="card-sub-options">
            <button className="card-sub-option">Recuperar por SMS</button>
            <button className="card-sub-option">Recuperar por e-mail</button>
            <button className="card-sub-option">Redefinir senha</button>
            <button className="card-sub-option">Ativar biometria</button>
            <button className="card-sub-option">Código de segurança</button>
            <button className="card-sub-option">Perguntas de segurança</button>
            <button className="card-sub-option">Desbloquear acesso</button>
            <button className="card-sub-option">Menu inicial</button>
          </div>
        </div>
      );
    }
    
    // OPÇÕES DE ATENDENTE
    if (msg.text.includes('[OPCOES_ATENDENTE]')) {
      const beforeText = msg.text.split('[OPCOES_ATENDENTE]')[0];
      return (
        <div key={msg.id} className="message-with-options">
          <div className={`message ${msg.sender}`}>
            {beforeText}
          </div>
          <div className="card-options">
            <button className="card-option card-option-highlight">Chat ao vivo</button>
            <button className="card-option">Ligar agora</button>
            <button className="card-option">Agendar ligação</button>
            <button className="card-option">WhatsApp</button>
            <button className="card-option">E-mail</button>
            <button className="card-option">Mais Opções</button>
          </div>
          <div className="sub-message">
            <div className={`message ${msg.sender}`}>
              Escolha a melhor forma de atendimento para você.
              <br /><br />
              Estamos prontos para ajudar! 👋
            </div>
          </div>
          <div className="card-sub-options">
            <button className="card-sub-option">Chat online</button>
            <button className="card-sub-option">0800-123-4567</button>
            <button className="card-sub-option">Agendar horário</button>
            <button className="card-sub-option">WhatsApp Business</button>
            <button className="card-sub-option">Enviar e-mail</button>
            <button className="card-sub-option">Reclamação</button>
            <button className="card-sub-option">Ouvidoria</button>
            <button className="card-sub-option">Menu inicial</button>
          </div>
        </div>
      );
    }

    // OPÇÕES DE CONTA CORRENTE
    if (msg.text.includes('[OPCOES_CONTA]')) {
      const beforeText = msg.text.split('[OPCOES_CONTA]')[0];
      return (
        <div key={msg.id} className="message-with-options">
          <div className={`message ${msg.sender}`}>
            {beforeText}
          </div>
          <div className="card-options">
            <button className="card-option card-option-highlight">Conta corrente</button>
            <button className="card-option">Saldo</button>
            <button className="card-option">Extrato</button>
            <button className="card-option">Dados da conta</button>
            <button className="card-option">Tarifas</button>
            <button className="card-option">Mais Opções</button>
          </div>
          <div className="sub-message">
            <div className={`message ${msg.sender}`}>
              O que você precisa sobre sua conta corrente?
              <br /><br />
              Escolha uma opção abaixo. 🏦
            </div>
          </div>
          <div className="card-sub-options">
            <button className="card-sub-option">Consultar saldo</button>
            <button className="card-sub-option">Ver extrato completo</button>
            <button className="card-sub-option">Dados bancários</button>
            <button className="card-sub-option">Comprovantes</button>
            <button className="card-sub-option">Tabela de tarifas</button>
            <button className="card-sub-option">Encerrar conta</button>
            <button className="card-sub-option">Abrir nova conta</button>
            <button className="card-sub-option">Menu inicial</button>
          </div>
        </div>
      );
    }

    // OPÇÕES DE EMPRÉSTIMO
    if (msg.text.includes('[OPCOES_EMPRESTIMO]')) {
      const beforeText = msg.text.split('[OPCOES_EMPRESTIMO]')[0];
      return (
        <div key={msg.id} className="message-with-options">
          <div className={`message ${msg.sender}`}>
            {beforeText}
          </div>
          <div className="card-options">
            <button className="card-option card-option-highlight">Empréstimos</button>
            <button className="card-option">Simular empréstimo</button>
            <button className="card-option">Crédito pessoal</button>
            <button className="card-option">Consignado</button>
            <button className="card-option">Refinanciamento</button>
            <button className="card-option">Mais Opções</button>
          </div>
          <div className="sub-message">
            <div className={`message ${msg.sender}`}>
              Qual tipo de crédito você está procurando?
              <br /><br />
              Veja as opções disponíveis. 💵
            </div>
          </div>
          <div className="card-sub-options">
            <button className="card-sub-option">Simular valores</button>
            <button className="card-sub-option">Ver taxas</button>
            <button className="card-sub-option">Crédito pessoal</button>
            <button className="card-sub-option">Empréstimo consignado</button>
            <button className="card-sub-option">Refinanciar dívida</button>
            <button className="card-sub-option">Antecipação FGTS</button>
            <button className="card-sub-option">Contratar agora</button>
            <button className="card-sub-option">Menu inicial</button>
          </div>
        </div>
      );
    }
    
    return <Message key={msg.id} message={msg} />;
  };

  return (
    <div className="chat-window">
      {messages.map((msg) => renderMessage(msg))}
    </div>
  );
};

export default ChatWindow;