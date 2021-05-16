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
  let ms = messagesData;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {/* <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">DimDimitch</NavLink>
        </div> */}

        <DialogItem name={dD[0].name} id={dD[0].id} />
        <DialogItem name={dD[1].name} id={dD[1].id} />
        <DialogItem name={dD[2].name} id={dD[2].id} />
        <DialogItem name={dD[3].name} id={dD[3].id} />
        <DialogItem name={dD[4].name} id={dD[4].id} />
        <DialogItem name={dD[5].name} id={dD[5].id} />
      </div>
      <div className={s.messanges}>
        <Message message={ms[0].message} />
        <Message message={ms[1].message} />
        <Message message={ms[2].message} />
        <Message message={ms[3].message} />
        <Message message={ms[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
