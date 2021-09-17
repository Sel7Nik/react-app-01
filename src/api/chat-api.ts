

let subscribers = [] as SubscriberType[]

let ws: WebSocket
const closeHandler = () => {
  setTimeout(createChannel, 3000)
}

const messageHandler = (ev: MessageEvent) => {

  const newMessages = JSON.parse(ev.data)
}


function createChannel() {
  ws?.removeEventListener('close', closeHandler)
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('close', closeHandler)
}


export const chatAPI = {
  subscribe(callback: SubscriberType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter(sub => sub !== callback)
    }
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter(sub => sub !== callback)
  }
}

type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}