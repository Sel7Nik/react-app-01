import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  // test('status from props shoud be in the state', () => {
  //   const component = create(<ProfileStatus status="any status for test" />);
  //   const instance = component.getInstance();
  //   expect(instance.state.status).toBe('any status for test');
  // });
  // test('after creation <span></span> with status shoud be displayed', () => {
  //   const component = create(<ProfileStatus status="any status for test" />);
  //   const root = component.root;
  //   let span = root.findByType('span');
  //   expect(span).not.toBeNull();
  // });
  // test('after creation <input><input>  shoud not be displayed', () => {
  //   const component = create(<ProfileStatus status="any status for test" />);
  //   const root = component.root;
  //   expect(() => {
  //     let input = root.findByType('input');
  //   }).toThrow();
  // });
  // test('after creation span with status shoud contains correct status', () => {
  //   const component = create(<ProfileStatus status="any status for test" />);
  //   const root = component.root;
  //   let span = root.findByType('span');
  //   expect(span.children[0]).toBe('any status for test');
  // });
  // test('input shoud be displayed in editMode', () => {
  //   const component = create(<ProfileStatus status="any status for test" />);
  //   const root = component.root;
  //   let span = root.findByType('span');
  //   span.props.onDoubleClick();
  //   let input = root.findByType('input');
  //   expect(input.props.value).toBe('any status for test');
  // });
  // test('callback should be called', () => {
  //   const mockCallback = jest.fn();
  //   const component = create(
  //     <ProfileStatus status="any status for test" updateStatus={mockCallback} />
  //   );
  //   const instance = component.getInstance();
  //   instance.deactivateEditMode();
  //   expect(mockCallback.mock.calls.length).toBe(1);
  // });
});
