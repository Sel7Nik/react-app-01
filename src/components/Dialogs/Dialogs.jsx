import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (p) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="/dialogs/1">DimDimitch</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">DimVovich</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">NikSanytch</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">OlegSanytch</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">PetrSanytch</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Olegovich</NavLink>
        </div>
      </div>
      <div className={s.messanges}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>i am fine</div>
      </div>
    </div>
  );
};

export default Dialogs;
