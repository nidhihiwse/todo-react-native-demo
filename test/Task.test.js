import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Task from '../components/Task';

describe('Task', () => {
  const onDeleteMock = jest.fn();

  afterEach(() => {
    onDeleteMock.mockClear();
  });

  it('should render task text', () => {
    const taskText = 'Sample Task';
    const { getByText } = render(<Task text={taskText} onDelete={onDeleteMock} />);
    const renderedTaskText = getByText(taskText);
    expect(renderedTaskText).toBeDefined();
  });

  it('should call onDelete when delete button is pressed', () => {
    const { getByTestId } = render(<Task text="Sample Task" onDelete={onDeleteMock} />);
    const deleteButton = getByTestId('delete-task-button');
    fireEvent.press(deleteButton);
    expect(onDeleteMock).toHaveBeenCalled();
  });

});