import { FC, useEffect, useState } from "react"
// import React from 'react'

const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}
const ChatPage: FC = () => {
  // export const ChatPage: React.FC=()=>{
  return <div>
    <Chat />
  </div>
}

const Chat: FC = () => {



  return <div>
    <Messages />
    <AddMessageForm />
  </div>
}
const Messages: FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    wsChanel.addEventListener('message', (ev: MessageEvent) => {
      let newMessages = JSON.parse(ev.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    })
  }, [])

  return <div style={{ height: "480px", overflowY: 'auto' }}>
    {messages.map((mes, index) => <Message message={mes} key={index} />)}
  </div>
}


const Message: FC<{ message: ChatMessageType }> = ({ message }) => {

  return <div>
    <img src={message.photo} alt="avatar" style={{ width: '30px' }} /><b>{message.userName}</b>

    <br />
    {message.message}
    <hr />
  </div>
}

const AddMessageForm: FC = () => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if (!message) {
      return
    }
    wsChanel.send(message)
    setMessage('')
  }

  return <div>
    <div>
      <textarea onChange={(ev) => setMessage(ev.currentTarget.value)} value={message}></textarea>
    </div>
    <div>
      <button onClick={sendMessage}> S E N D </button>
    </div>
  </div>
}






export default ChatPage