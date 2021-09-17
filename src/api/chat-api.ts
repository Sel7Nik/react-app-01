

const subscribers = [] as SubscriberType[]


export const chatAPI = {
  subscribe(callback: SubscriberType) {
    subscribers.push(callback)

  }


}

type SubscriberType = (messages: ChatMessageType[]) => void


export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}