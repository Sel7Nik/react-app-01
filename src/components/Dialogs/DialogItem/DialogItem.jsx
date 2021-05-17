import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (p) => {
  let path = '/dialogs/' + p.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}> {p.name}</NavLink>
    </div>
  );
};

export default DialogItem;
