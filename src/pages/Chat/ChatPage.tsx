import { FC } from "react"
// import React from 'react'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
  const messages: Array<number> = [1, 2, 3, 4]
  return <div style={{ height: "480px", overflowY: 'auto' }}>
    {messages.map((m: any) =>
      <Message />)}
    {messages.map((m: any) =>
      <Message />)}
    {messages.map((m: any) =>
      <Message />)}
  </div>
}

const Message: FC = () => {
  const message = {
    url: 'https://via.placeholder.com/30',
    author: 'Nik Semenov',
    text: 'Hello, My friends'
  }
  return <div>
    <img src={message.url} alt="avatar" /><b>{message.author}</b>

    <br />
    {message.text}
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