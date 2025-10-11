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

  return (
    <>
     <BrowserRouter>
     
     <nav>
      <Link to="/ChatWindow">Chat</Link> |{""}
      <Link to="/Message">Mensage</Link> |{""}
      <Link to="/InputArea">Input</Link> |{""}
      <Link to="/QuickMensage">Quick</Link> |{""}
     </nav>
    <Routes>
    <Route path="/ChatWindow" element={<ChatWindow/>} />
    <Route path="/Message" element={<Message/>} />
    <Route path="/InputArea" element={<InputArea/>} />
    <Route path="/QuickMensage" element={<QuickMensage/>} />
    </Routes> 
     
     
     
     </BrowserRouter>
   
    </>
  )
}

export default App
