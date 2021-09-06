import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import css from './DialogItem.module.css';

type PropsDialogItemType = {
  id: number
  name: string
}

const DialogItem: FC<PropsDialogItemType> = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={css.dialog}>
      <NavLink to={path}> {props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
