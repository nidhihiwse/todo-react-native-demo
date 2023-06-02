import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import App from '../App';

jest.mock('expo-local-authentication', () => ({
  hasHardwareAsync: jest.fn().mockResolvedValue(true),
  authenticateAsync: jest.fn().mockResolvedValue({ success: true }),
}));

describe('App', () => {
  it('should render the app', async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
      const authenticateButton = getByText('Authenticate');
      expect(authenticateButton).toBeDefined();

      fireEvent.press(authenticateButton);
    });

    const successText = await waitFor(() => getByText('Authenticated successfully!'));
    expect(successText).toBeDefined();
  });
});