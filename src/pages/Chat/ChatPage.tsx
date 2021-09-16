import { FC, useEffect, useState } from "react"
// import React from 'react'


export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

const ChatPage: FC = () => {
  return <div>
    <Chat />
  </div>
}

const Chat: FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

  useEffect(() => {
    let ws: WebSocket

    const closeHandler = () => {
      setTimeout(createChannel, 3000)
    }

    function createChannel() {

      ws?.removeEventListener('close', closeHandler)
      ws?.close()

      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      ws.addEventListener('close', closeHandler)
      setWsChannel(ws)
    }
    createChannel();
    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])

  useEffect(() => {

  }, [wsChannel])

  return <div>
    <Messages wsChannel={wsChannel} />
    <AddMessageForm wsChannel={wsChannel} />
  </div>
}
const Messages: FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    let messageHandler = (ev: MessageEvent) => {
      let newMessages = JSON.parse(ev.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    }
    wsChannel?.addEventListener('message', messageHandler)
    return () => {
      wsChannel?.removeEventListener('message', messageHandler)
    }
  }, [wsChannel])

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

const AddMessageForm: FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [message, setMessage] = useState('')
  const [readyStatus, setReadyStatus] = useState<'panding' | 'ready'>('panding')


  useEffect(() => {
    let openHandler = () => {
      setReadyStatus('ready')
    }
    wsChannel?.addEventListener('open', openHandler)
    return () => {
      wsChannel?.removeEventListener('open', openHandler)
    }
  }, [wsChannel])

  const sendMessage = () => {
    if (!message) {
      return
    }
    wsChannel?.send(message)
    setMessage('')
  }

  return <div>
    <div>
      <textarea onChange={(ev) => setMessage(ev.currentTarget.value)} value={message}></textarea>
    </div>
    <div>
      <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}> S E N D </button>
    </div>
  </div>
}






export default ChatPage