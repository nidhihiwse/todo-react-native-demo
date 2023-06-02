import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

jest.mock('expo-local-authentication', () => ({
  hasHardwareAsync: jest.fn().mockResolvedValue(true),
  authenticateAsync: jest.fn().mockResolvedValue({ success: true }),
}));

describe('App', () => {
  it('should render Auth screen when not authenticated', () => {
    const { getByText } = render(<App />);
    const authScreen = getByText('To do List demo app!');
    expect(authScreen).toBeDefined();
  });

  it('should render TodoList screen when authenticated', async () => {
    const { getByText } = render(<App />);
  
    fireEvent.press(getByText('Login'));

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const todoListScreen = getByText('Todo List');
    expect(todoListScreen).toBeDefined();
  });

});