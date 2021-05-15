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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {/* <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">DimDimitch</NavLink>
        </div> */}

        <DialogItem name="DimDimitch" id="1" />
        <DialogItem name="DimVovich" id="2" />
        <DialogItem name="NikSanytch" id="3" />
        <DialogItem name="OlegSanytch" id="4" />
        <DialogItem name="PetrSanytch" id="5" />
        <DialogItem name="Olegovich" id="6" />
      </div>
      <div className={s.messanges}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="I am fine" />
      </div>
    </div>
  );
};

export default Dialogs;
