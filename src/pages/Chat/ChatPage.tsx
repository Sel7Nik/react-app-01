import { FC, useEffect, useState } from "react"
// import React from 'react'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
    <AddMessagesForm />
  </div>
}
const Messages: FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    ws.addEventListener('message', (e) => {
      setMessages(JSON.parse(e.data))
    })
  }, [])

  return <div style={{ height: "480px", overflowY: 'auto' }}>
    {messages.map((m, index) => <Message message={m} key={index} />)}
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

const AddMessagesForm: FC = () => {
  return <div>
    <div>
      <textarea>text message</textarea>
    </div>
    <div>
      <button> S E N D </button>
    </div>
  </div>
}






export default ChatPage