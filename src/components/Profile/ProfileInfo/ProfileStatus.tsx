import React, { ChangeEvent } from 'react';

type PropsProfileStatusType = {
  status: string
  updateStatus: (newStatus: string) => void

}

type StateProfileStatusType = {
  editMode: boolean
  status: string
}


class ProfileStatus extends React.Component<PropsProfileStatusType, StateProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode() {
    this.setState({ editMode: true });
  }
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: PropsProfileStatusType, prevState: StateProfileStatusType) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || '--------------'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
