import s from './Dialogs.module.css';

const Dialogs = (p) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialog + ' ' + s.active}>DimDimitch</div>
        <div className={s.dialog}>DimVovich</div>
        <div className={s.dialog}>DimSanytch</div>
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
