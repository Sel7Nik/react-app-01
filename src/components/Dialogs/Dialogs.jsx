import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (p) => {
  let path = '/dialogs/' + p.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}> {p.name}</NavLink>
    </div>
  );
};

const Message = (p) => {
  return (
    <>
      <div className={s.message}>{p.message}</div>
    </>
  );
};

const Dialogs = (p) => {
  let dialogsData = [
    { id: 1, name: 'DimDimitch' },
    { id: 2, name: 'DimVovich' },
    { id: 3, name: 'NikSanytch' },
    { id: 4, name: 'OlegSanytch' },
    { id: 5, name: 'PetrSanytch' },
    { id: 6, name: 'Olegovich' },
  ];

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you' },
    { id: 4, message: 'I am fine' },
    { id: 5, message: 'I am fine too' },
    { id: 6, message: 'OhOhOh' },
  ];

  let dD = dialogsData;
  let mD = messagesData;

  let dialogsElements = dD.map((n) => <DialogItem name={n.name} id={n.id} />);
  let messagesElements = mD.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let dE = dialogsElements;
  let mE = messagesElements;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dE}</div>
      <div className={s.messanges}>{mE}</div>
    </div>
  );
};

export default Dialogs;
