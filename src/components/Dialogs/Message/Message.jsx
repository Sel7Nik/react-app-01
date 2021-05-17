import s from './Message.module.css';

const Message = (p) => {
  return (
    <>
      <div className={s.message}>{p.message}</div>
    </>
  );
};

export default Message;
