import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  it('should render the TodoList component', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList setIsAuthenticated={() => {}} />);
  
    expect(getByText('Todo List')).toBeDefined();
    expect(getByPlaceholderText('Add a task')).toBeDefined();
    expect(getByText('+')).toBeDefined();
  });
  
  it('should add a task on button press', () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(<TodoList setIsAuthenticated={() => {}} />);
  
    const inputField = getByPlaceholderText('Add a task');
    fireEvent.changeText(inputField, 'Task 1');
    fireEvent.press(getByText('+'));
  
    expect(getAllByText('Task 1')).toHaveLength(1);
  });
  
  it('should edit a task on button press', () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(<TodoList setIsAuthenticated={() => {}} />);
  
    const inputField = getByPlaceholderText('Add a task');
    fireEvent.changeText(inputField, 'Task 1');
    fireEvent.press(getByText('+'));
  
    const editButton = getByText('Task 1');
    fireEvent.press(editButton);
  
    expect(getAllByText('Task 1')).toHaveLength(1);
  });

});