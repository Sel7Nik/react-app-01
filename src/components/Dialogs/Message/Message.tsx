import { FC } from 'react';
import css from './Message.module.css';

type PropsMessageType = {
  message: string
  id: number
}

const Message: FC<PropsMessageType> = (props) => {

  return (
    <>
      <div className={css.message}>{props.message}</div>
    </>
  );
};

export default Message;
