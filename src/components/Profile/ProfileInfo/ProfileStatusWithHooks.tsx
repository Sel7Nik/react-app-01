import { SetStateAction, useEffect, useState } from 'react';

type PropsProfileStatusWithHooksType = {
  status: string
  updateStatus: (status: string) => void;
}

const ProfileStatusWithHooks = (props: PropsProfileStatusWithHooksType) => {
  // let stateWithSetState = useState(true);
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];
  // * * * Три строки выше замена на строку ниже
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (event: { currentTarget: { value: SetStateAction<string>; }; }) => {
    setStatus(event.currentTarget.value);
  };
  //*** useEffect
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <b>
            <span onDoubleClick={activateEditMode}>
              {props.status || '--------------'}
            </span>
          </b>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
