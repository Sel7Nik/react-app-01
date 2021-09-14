import { FC } from "react"
// import React from 'react'
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
  return <div>

  </div>
}
const AddMessagesForm: FC = () => {
  return <div>
    <textarea>text message</textarea>
    <button> S E N D </button>
  </div>
}






export default ChatPage