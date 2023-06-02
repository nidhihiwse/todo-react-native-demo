import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Auth from '../components/AuthScreen';

describe('Auth', () => {
  it('should call the onAuthenticate function when Login button is pressed', () => {
    const onAuthenticate = jest.fn();
    const { getByText } = render(<Auth onAuthenticate={onAuthenticate} />);
    const loginButton = getByText('Login');

    fireEvent.press(loginButton);

    expect(onAuthenticate).toHaveBeenCalledTimes(1);
  });
});